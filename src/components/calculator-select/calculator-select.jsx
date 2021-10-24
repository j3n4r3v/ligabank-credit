import React from 'react';
import PropTypes from 'prop-types';

import { CreditTargetNames } from '../utils/const';
import { Select } from '../select/select';

import './calculator-select.scss';

const CalculatorSelect = ({ className }) => {

    return (
        <section className={`${className} calculator-select`}>
            <h3 className="calculator-select__subtitle">Шаг 1. Цель кредита</h3>
            <Select
                className="calculator-select__select"
                options={CreditTargetNames}
                title={'Выберите цель кредита'}
            />
        </section>
    );
};

CalculatorSelect.propTypes = {
    className: PropTypes.string.isRequired
};

export { CalculatorSelect };