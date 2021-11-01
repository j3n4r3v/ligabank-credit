import React from 'react';
import PropTypes from 'prop-types';

import { ChooseOption } from '../choose-option/choose-option';
// import { SuccessModal } from '../success-modal/success-modal';
import { Summary } from '../summary/summary';

import './calculator.scss';

const Calculator = ({ className }) => {

    return (
        <section className={`${className} calculator wrapper`} id="calculator">
            <h2 className="calculator__title">Кредитный калькулятор</h2>
            <ChooseOption className="calculator__options" />
            {
                <Summary className="calculator__summary" />}
            {/* {
                <SuccessModal className="calculator__success" />} */}
        </section>
    );
};

Calculator.propTypes = {
    className: PropTypes.string.isRequired
};

export { Calculator };