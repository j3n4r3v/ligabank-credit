import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { CalculatorInputs } from '../calculator-inputs/calculator-inputs';
import { CalculatorSelect } from '../calculator-select/calculator-select';
import { InfoError } from '../info-block/info-block';
import { Suggest } from '../suggest/suggest';

import { AutoCreditConsts, CreditTarget, MortgageConsts } from '../utils/const';
import {
    changeCost, changeFee, changePeriod,
    changeUseMotherCapital, changeUseKasko, changeUseLifeInsurance
} from '../../store/actions';

import './calculator-options.scss';

const CalculatorOptions = ({ className, onSuggestBtnClick }) => {

    const dispatch = useDispatch();
    const option = useSelector(state => state.option);
    const isAutoCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT);
    const minCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT ? AutoCreditConsts.MIN_CREDIT : MortgageConsts.MIN_CREDIT);
    const creditSum = useSelector(state => state.cost - state.fee -
        MortgageConsts.PARENT_CAPITAL * (state.useMotherCapital && option === CreditTarget.MORTGAGE));

    useEffect(() => {
        const resetForm = () => {
            const cost = isAutoCredit ? AutoCreditConsts.MIN_COST : MortgageConsts.MIN_COST;
            dispatch(changeCost(cost));
            dispatch(changeFee(Math.ceil((isAutoCredit ? AutoCreditConsts.MIN_FEE : MortgageConsts.MIN_FEE) * cost) / 100));
            dispatch(changePeriod(isAutoCredit ? AutoCreditConsts.MIN_PERIOD : MortgageConsts.MIN_PERIOD));
            dispatch(changeUseMotherCapital(false));
            dispatch(changeUseKasko(false));
            dispatch(changeUseLifeInsurance(false));
        };
            resetForm();

    }, [dispatch, isAutoCredit, option]);


    return (
        <div className={`${className} calculator-options`}>

            <div className="calculator-options__left">
                    <CalculatorSelect className="calculator-options__list" />
                {option != null &&
                    <CalculatorInputs className="calculator-options__inputs" />
                }
            </div>

            <div className="calculator-options__right">
                {option != null &&
                    <>
                    {creditSum < minCredit
                        ? <InfoError className="calculator-options__error" />
                        : <Suggest className="calculator-options__suggest" onClick={() => onSuggestBtnClick()} />
                    }
                    </>
                }
            </div>

        </div>
    );
};

CalculatorOptions.propTypes = {
    className: PropTypes.string.isRequired,
};

export { CalculatorOptions };