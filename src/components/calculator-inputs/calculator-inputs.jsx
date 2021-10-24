import React from 'react';
import PropTypes from 'prop-types';

import { InputCheckbox } from '../input-checkbox/input-checkbox';
import { InputButtons } from '../input-buttons/input-buttons';
import { Range } from '../range/range';

import './calculator-inputs.scss';

const CalculatorInputs = ({ className }) => {

    return (
        <section className={`${className} calculator-inputs`}>
            <h3 className="calculator-inputs__parameter">Шаг 2. Введите параметры кредита</h3>
            <div className="calculator-inputs__subtitle">
                <InputButtons className={`calculator-inputs__price`} />

                <Range
                    className="calculator-inputs__range" />

                <Range
                    className="calculator-inputs__range" />


                <InputCheckbox className="calculator-inputs__comprehensive-cover" label="Оформить КАСКО в нашем банке" />
                <InputCheckbox className="calculator-inputs__insurance" label="Оформить Страхование жизни в нашем банке" />
                <InputCheckbox className="calculator-inputs__capital" label="Использовать материнский капитал" />

            </div>
        </section>
    );
};

CalculatorInputs.propTypes = {
    className: PropTypes.string.isRequired
};

export { CalculatorInputs };
