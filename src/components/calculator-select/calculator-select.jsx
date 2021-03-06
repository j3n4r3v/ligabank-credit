import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CreditTargetName } from '../utils/const';
import { OptionsList } from '../options-list/options-list';
import { changeOption } from '../../store/actions';

import './calculator-select.scss';

const CalculatorSelect = ({ className }) => {
    const dispatch = useDispatch();

    const hundleChangeTarget = (value) => {
        dispatch(changeOption(value));
    };

    return (
        <section className={`${className} calculator-options`}>
            <h3 className="calculator-options__subtitle">Шаг 1. Цель кредита</h3>
            
            <OptionsList
                className="calculator__calculator-options"
                options={CreditTargetName}
                title={'Выберите цель кредита'}
                onChange={(value) => hundleChangeTarget(value)}
            />
        </section>
    );
};

CalculatorSelect.propTypes = {
    className: PropTypes.string.isRequired
};

export { CalculatorSelect };