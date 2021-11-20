import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { InputCheckbox } from '../input-checkbox/input-checkbox';
import { InputButtons } from '../input-buttons/input-buttons';
import { Range } from '../range/range';

import { AutoCreditConst, CreditTarget, MortgageConst, STEP_FEE } from '../utils/const';
import { getCostOfPercent, getPercentOfCost, getValidValue, getWordsLength, getWordsLengthFromValue } from '../utils/utils';

import {
    changeCost, changeFee, changePeriod,
    changeUseMotherCapital, changeUseKasko, changeUseLifeInsurance
} from '../../store/actions';

import './calculator-inputs.scss';

const CalculatorInputs = ({ className }) => {

    const dispatch = useDispatch();
    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const period = useSelector(state => state.period);
    const useMotherCapital = useSelector(state => state.useMotherCapital);
    const useKacko = useSelector(state => state.useKacko);
    const useLifeInsurance = useSelector(state => state.useLifeInsurance);
    const isAutoCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT);
    const minCost = isAutoCredit ? AutoCreditConst.MIN_COST : MortgageConst.MIN_COST;
    const maxCost = isAutoCredit ? AutoCreditConst.MAX_COST : MortgageConst.MAX_COST;
    const minFee = isAutoCredit ? AutoCreditConst.MIN_FEE : MortgageConst.MIN_FEE;
    const maxFee = isAutoCredit ? AutoCreditConst.MAX_FEE : MortgageConst.MAX_FEE;
    const minPeriod = isAutoCredit ? AutoCreditConst.MIN_PERIOD : MortgageConst.MIN_PERIOD;
    const maxPeriod = isAutoCredit ? AutoCreditConst.MAX_PERIOD : MortgageConst.MAX_PERIOD;
    const stepCost = isAutoCredit ? AutoCreditConst.STEP_COST : MortgageConst.STEP_COST;
    const minCredit = isAutoCredit ? AutoCreditConst.MIN_CREDIT : MortgageConst.MIN_CREDIT;

    const maxFeeCost = cost - minCredit - MortgageConst.PARENT_CAPITAL *
        (useMotherCapital && !isAutoCredit);

    const [percent, setPercent] = useState(minFee);
    const [errorCost, setErrorCost] = useState(false);

    const hundleCostValidate = (value) => {
        
        // setErrorCost(false)

    if ( value < minCost ) {
        value = minCost // почему не показывает при changeCost(minCost) ???
        dispatch(changeCost(value))&&setErrorCost(true)

    } else if  (value > maxCost) {
        value = maxCost // почему не показывает при changeCost(maxCost) ???
        dispatch(changeCost(value))&&setErrorCost(true)
    } 
        return dispatch(changeCost(value))&&setErrorCost(false);
        // setErrorCost(false) --- почему так вот не работает ???
        };

    const hundleCostChange = (value) => {
        const validCost = Number.parseFloat(value);
        hundleCostValidate(validCost);

        if (isFinite(validCost) && value > minCost && value < maxCost) {
            dispatch(changeFee(getCostOfPercent(minFee, value)));
        } else {
            dispatch(changeFee(getCostOfPercent(minFee, minCost)));
        }
    };

    const hundleFeeValidate = () => {
        const validFee = getValidValue(fee, getCostOfPercent(minFee, cost), maxFeeCost);
        dispatch(changeFee(validFee));
        setPercent(getPercentOfCost(validFee, cost));
    };

    const hundleFeeChange = (fee) => {
        dispatch(changeFee(fee));
        setPercent(getPercentOfCost(fee, cost));
    };

    const hundlePeriodValidate = () => {
        dispatch(changePeriod(getValidValue(period, minPeriod, maxPeriod)));
    };

    const hundlePeriodChange = (value) => {
        dispatch(changePeriod(value));
    };

    const hundleUseMotherCapital = (value) => {
        dispatch(changeUseMotherCapital(value));
    };
    const hundleUseLifeInsurance = (value) => {
        dispatch(changeUseLifeInsurance(value));
    };

    const hundleUseKacko = (value) => {
        dispatch(changeUseKasko(value));
    };

    return (
        <section className={`${className} calculator-inputs`}>
            <h3 className="calculator-inputs__parameter">Шаг 2. Введите параметры кредита</h3>
            <div className="calculator-inputs__subtitle">

                <InputButtons
                    className={`calculator-inputs__price ${errorCost && 'input--error'}`}
                    id="input-buttons"
                    value={cost}
                    min={minCost}
                    max={maxCost}
                    mask={getWordsLength(cost, [' рубль', ' рубля', ' рублей'])}
                    step={stepCost}
                    onChange={(value) => hundleCostChange(value)}
                    label={`Стоимость ${isAutoCredit ? 'автомобиля' : 'недвижимости'}`}
                    desc={`${errorCost ? 'Введите сумму от' : 'От'} ${minCost.toLocaleString()} до ${maxCost.toLocaleString()} рублей`}
                />
                <Range
                    className="calculator-inputs__range"
                    id="input-range"
                    onChangeInput={(value) => hundleFeeChange(value)}
                    onChangeRange={(evt) => hundleFeeChange(getCostOfPercent(evt.target.value, cost))}
                    onBlur={() => hundleFeeValidate()}
                    range={percent}
                    value={fee}
                    mask={getWordsLength(fee, ['рубль', 'рубля', 'рублей'])}
                    min={minFee}
                    max={maxFee}
                    step={STEP_FEE}
                    label="Первоначальный взнос"
                    desc={`${percent > maxFee ? maxFee : percent}%`}
                />

                <Range
                    className="calculator-inputs__range"
                    id="input-ages"
                    onChangeInput={(value) => hundlePeriodChange(value)}
                    onChangeRange={(evt) => hundlePeriodChange(evt.target.value)}
                    onBlur={() => hundlePeriodValidate()}
                    value={period}
                    range={period}
                    min={minPeriod}
                    max={maxPeriod}
                    mask={getWordsLength(period, ['год', 'года', 'лет'])}
                    label="Срок кредитования"
                    desc={<>
                        <span>{getWordsLengthFromValue(minPeriod, ['год', 'года', 'лет'])}</span>
                        <span>{getWordsLengthFromValue(maxPeriod, ['год', 'года', 'лет'])}</span>
                    </>}

                />

                {isAutoCredit
                    ? <>
                        <InputCheckbox
                            className="calculator-inputs__kasko" 
                            id="kasko"
                            label="Оформить КАСКО в нашем банке"
                            value={useKacko} onChange={(value) => hundleUseKacko(value)}
                        />

                        <InputCheckbox
                            className="calculator-inputs__insurance"
                            id="insurance"
                            label="Оформить Страхование жизни в нашем банке"
                            value={useLifeInsurance}
                            onChange={(value) => hundleUseLifeInsurance(value)}
                        />
                    </>

                    : <InputCheckbox
                            className="calculator-inputs__capital"
                            id="capital"
                            label="Использовать материнский капитал"
                            value={useMotherCapital}
                            onChange={(value) => hundleUseMotherCapital(value)}
                      />
                }
            </div>
        </section>
    );
};

CalculatorInputs.propTypes = {
    className: PropTypes.string.isRequired

};

export { CalculatorInputs };
