import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { CalculatorInputs } from '../calculator-inputs/calculator-inputs';
import { CalculatorSelect } from '../calculator-select/calculator-select';
import { InfoError } from '../info-block/info-block';
import { Suggest } from '../suggest/suggest';

import { AutoCreditConst, CreditTarget, MortgageConst } from '../utils/const';
import {
    changeCost, changeFee, changePeriod,
    changeUseMotherCapital, changeUseKasko, changeUseLifeInsurance
} from '../../store/actions';

import './calculator-options.scss';

const CalculatorOptions = ({ className, onSuggestBtnClick }) => {

    const dispatch = useDispatch();
    const option = useSelector(state => state.option);
    const isAutoCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT);
    const minCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT ? AutoCreditConst.MIN_CREDIT : MortgageConst.MIN_CREDIT);
    const creditSum = useSelector(state => state.cost - state.fee -
        MortgageConst.PARENT_CAPITAL * (state.useMotherCapital && option === CreditTarget.MORTGAGE));

    useEffect(() => {
        const resetForm = () => {
            const cost = isAutoCredit ? AutoCreditConst.MIN_COST : MortgageConst.MIN_COST;
            dispatch(changeCost(cost));
            dispatch(changeFee(Math.ceil((isAutoCredit ? AutoCreditConst.MIN_FEE : MortgageConst.MIN_FEE) * cost) / 100));
            dispatch(changePeriod(isAutoCredit ? AutoCreditConst.MIN_PERIOD : MortgageConst.MIN_PERIOD));
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