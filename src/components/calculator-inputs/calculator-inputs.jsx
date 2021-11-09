import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { InputCheckbox } from '../input-checkbox/input-checkbox';
import { InputButtons } from '../input-buttons/input-buttons';
import { Range } from '../range/range';

import { AutoCreditConsts, CreditTarget, MortgageConsts, STEP_FEE } from '../utils/const';
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
    const minCost = isAutoCredit ? AutoCreditConsts.MIN_COST : MortgageConsts.MIN_COST;
    const maxCost = isAutoCredit ? AutoCreditConsts.MAX_COST : MortgageConsts.MAX_COST;
    const minFee = isAutoCredit ? AutoCreditConsts.MIN_FEE : MortgageConsts.MIN_FEE;
    const maxFee = isAutoCredit ? AutoCreditConsts.MAX_FEE : MortgageConsts.MAX_FEE;
    const minPeriod = isAutoCredit ? AutoCreditConsts.MIN_PERIOD : MortgageConsts.MIN_PERIOD;
    const maxPeriod = isAutoCredit ? AutoCreditConsts.MAX_PERIOD : MortgageConsts.MAX_PERIOD;
    const stepCost = isAutoCredit ? AutoCreditConsts.STEP_COST : MortgageConsts.STEP_COST;
    const minCredit = isAutoCredit ? AutoCreditConsts.MIN_CREDIT : MortgageConsts.MIN_CREDIT;

    const maxFeeCost = cost - minCredit - MortgageConsts.PARENT_CAPITAL *
        (useMotherCapital && !isAutoCredit);

    const [percent, setPercent] = useState(minFee);
    const [errorCost, setErrorCost] = useState(false);

    const onCostValidate = (value) => {
        if (!isFinite(Number.parseFloat(value)) || value < minCost || value > maxCost) {
            setErrorCost(true);
        } else {
            setErrorCost(false);
        }
    };

    const onCostChange = (value) => {
        const validCost = Number.parseFloat(value);
        onCostValidate(validCost);

        if (isFinite(validCost)) {
            dispatch(changeCost(validCost));
        }
        if (isFinite(validCost) && value > minCost && value < maxCost) {
            dispatch(changeFee(getCostOfPercent(minFee, value)));
        } else {
            dispatch(changeFee(getCostOfPercent(minFee, minCost)));
        }
    };

    const onFeeValidate = () => {
        const validFee = getValidValue(fee, getCostOfPercent(minFee, cost), maxFeeCost);
        dispatch(changeFee(validFee));
        setPercent(getPercentOfCost(validFee, cost));
    };

    const onFeeChange = (fee) => {
        dispatch(changeFee(fee));
        setPercent(getPercentOfCost(fee, cost));
    };

    const onPeriodValidate = () => {
        dispatch(changePeriod(getValidValue(period, minPeriod, maxPeriod)));
    };

    const onPeriodChange = (value) => {
        dispatch(changePeriod(value));
    };

    const onUseMotherCapital = (value) => {
        dispatch(changeUseMotherCapital(value));
    };
    const onUseLifeInsurance = (value) => {
        dispatch(changeUseLifeInsurance(value));
    };

    const onUseKacko = (value) => {
        dispatch(changeUseKasko(value));
    };

    return (
        <section className={`${className} calculator-inputs`}>
            <h3 className="calculator-inputs__parameter">Шаг 2. Введите параметры кредита</h3>
            <div className="calculator-inputs__subtitle">

                <InputButtons
                    className={`calculator-inputs__price ${errorCost && 'input--error'}`}
                    value={cost}
                    min={minCost}
                    max={maxCost}
                    mask={getWordsLength(cost, [' рубль', ' рубля', ' рублей'])}
                    step={stepCost}
                    onChange={(value) => onCostChange(value)}
                    type="string"
                    label={`Стоимость ${isAutoCredit ? 'автомобиля' : 'недвижимости'}`}
                    desc={`${errorCost ? 'Введите сумму от' : 'От'} ${minCost.toLocaleString()} до ${maxCost.toLocaleString()} рублей`}
                />
                <Range
                    className="calculator-inputs__range"
                    onChangeInput={(value) => onFeeChange(value)}
                    onChangeRange={(evt) => onFeeChange(getCostOfPercent(evt.target.value, cost))}
                    onBlur={() => onFeeValidate()}
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
                    onChangeInput={(value) => onPeriodChange(value)}
                    onChangeRange={(evt) => onPeriodChange(evt.target.value)}
                    onBlur={() => onPeriodValidate()}
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
                        <InputCheckbox className="calculator-inputs__comprehensive-cover" label="Оформить КАСКО в нашем банке" value={useKacko} onChange={(value) => onUseKacko(value)} />
                        <InputCheckbox className="calculator-inputs__insurance" label="Оформить Страхование жизни в нашем банке" value={useLifeInsurance} onChange={(value) => onUseLifeInsurance(value)} />
                    </>
                    : <InputCheckbox className="calculator-inputs__capital" label="Использовать материнский капитал" value={useMotherCapital} onChange={(value) => onUseMotherCapital(value)} />
                }
            </div>
        </section>
    );
};

CalculatorInputs.propTypes = {
    className: PropTypes.string.isRequired
};

export { CalculatorInputs };
