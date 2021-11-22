import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
    AutoCreditConst,
    CreditTarget,
    MortgageConst,
    MOUNTS_IN_YEAR,
    PART_PAYMENT_OF_INCOME
} from '../utils/const';

import { getCostOfPercent, getValidValue, getWordsLengthFromValue } from '../utils/utils';

import { Button } from '../button/button';

import './suggest.scss';

const Suggest = ({ className, onClick }) => {

    const handleClick = () => {
        onClick();
    }

    const isAutoCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT);
    const minCredit = isAutoCredit ? AutoCreditConst.MIN_CREDIT : MortgageConst.MIN_CREDIT;
    const minCost = isAutoCredit ? AutoCreditConst.MIN_COST : MortgageConst.MIN_COST;
    const maxCost = isAutoCredit ? AutoCreditConst.MAX_COST : MortgageConst.MAX_COST;
    const cost = useSelector(state => getValidValue(state.cost, minCost, maxCost));
    const useMotherCapital = useSelector(state => state.useMotherCapital);
    const maxFeeCost = cost - minCredit - MortgageConst.PARENT_CAPITAL * (useMotherCapital && !isAutoCredit);
    const minFee = isAutoCredit ? AutoCreditConst.MIN_FEE : MortgageConst.MIN_FEE;
    const fee = useSelector(state => getValidValue(state.fee, getCostOfPercent(minFee, cost), maxFeeCost));
    const creditSum = useSelector(state => cost - fee - MortgageConst.PARENT_CAPITAL *
        (state.useMotherCapital && state.option === CreditTarget.MORTGAGE)) || minCredit;
    const useKacko = useSelector(state => state.useKacko);
    const useLifeInsurance = useSelector(state => state.useLifeInsurance);
    const period = useSelector(state => state.period);
    
    const getPercents = () => {
        let percent = AutoCreditConst.MAX_INTEREST_RATE;
        if (isAutoCredit) {
            if (cost >= AutoCreditConst.MONEY_BORDER) {
                percent = AutoCreditConst.MIN_INTEREST_RATE;
            }
            if (useKacko || useLifeInsurance) {
                percent = AutoCreditConst.MAX_INTEREST_RATE_ADD;
            }
            if (useKacko && useLifeInsurance) {
                percent = AutoCreditConst.MIN_INTEREST_RATE_ALL_ADD;
            }
        }
        else {
            fee * 100 < MortgageConst.PERCENT_FEE_OF_COST_BORDER * cost  ?
                percent = MortgageConst.MAX_INTEREST_RATE :  percent = MortgageConst.MIN_INTEREST_RATE;
        }
        return percent;
    };

    const getMonthlyPayment = () => {
        const interestRate = (getPercents() / 100) / MOUNTS_IN_YEAR;
        return Math.ceil(creditSum *
            (interestRate + (interestRate / (Math.pow(1 + interestRate, period * MOUNTS_IN_YEAR) - 1))));
    };

    const getRequiredIncome = () => {
        return Math.ceil(getMonthlyPayment() * 100 / PART_PAYMENT_OF_INCOME);
    };

    return (
        <section className={`suggest ${className}`}>
            <h3 className="suggest__subtitle">Наше предложение</h3>
            <div className="suggest__wrapper">
                <div className="suggest__top">
                    <p className="suggest__result">

                        {creditSum.toLocaleString()} рублей
                        
                        <small className="suggest__desc">
                            Сумма {isAutoCredit ? 'автокредита' : 'ипотеки'}
                        </small>
                    </p>
                    <p className="suggest__result">

                        {getPercents()<10 ? getPercents() + "0" : getPercents()}%

                        <small className="suggest__desc">
                            Процентная ставка
                        </small>
                    </p>
                </div>
                <div className="suggest__bottom">
                    <p className="suggest__result">

                        {getWordsLengthFromValue(getMonthlyPayment(), ['рубль', 'рубля', 'рублей'])}

                        <small className="suggest__desc">
                            Ежемесячный платеж
                        </small>
                    </p>
                    <p className="suggest__result">

                        {getWordsLengthFromValue(getRequiredIncome(), ['рубль', 'рубля', 'рублей'])}

                        <small className="suggest__desc">
                            Необходимый&nbsp;доход
                        </small>
                    </p>
                </div>
            </div>
            <Button
                className="suggest__button"
                nameButton="Оформить заявку"
                onClick={() => handleClick()}
                name="make a request"
            />
        </section>
    );
};

Suggest.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export { Suggest };
