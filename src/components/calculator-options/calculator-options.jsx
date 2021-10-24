import React from 'react';
import PropTypes from 'prop-types';

import { CalculatorInputs } from '../calculator-inputs/calculator-inputs';
import { CalculatorSelect } from '../calculator-select/calculator-select';
import { InfoError } from '../info-block/info-block';
import { Suggest } from '../suggest/suggest';

import './calculator-options.scss';

const CalculatorOptions = ({ className }) => {

    return (
        <div className={`${className} calculator-options`}>
            <div className="calculator-options__left">
                <CalculatorSelect className="calculator-options__select" />

                    <CalculatorInputs className="calculator-options__inputs" />

            </div>
            <div className="calculator-options__right">
                    <>
                            <InfoError className="calculator-options__error" />
                            <Suggest className="calculator-options__suggest" />
                    </>
            </div>
        </div>
    );
};

CalculatorOptions.propTypes = {
    className: PropTypes.string.isRequired,
};

export { CalculatorOptions };