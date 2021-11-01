import React from 'react';
import PropTypes from 'prop-types';

import { CalculatorInputs } from '../calculator-inputs/calculator-inputs';
import { ChooseOption } from '../choose-option/choose-option';
import { InfoError } from '../info-block/info-block';
import { Suggest } from '../suggest/suggest';

import './choose-options.scss';

const CalculatorOptions = ({ className }) => {

    return (
        <div className={`${className} choose-options`}>
            <div className="choose-options__left">
                <ChooseOption className="choose-options__list" />

                <CalculatorInputs className="choose-options__inputs" />

            </div>
            <div className="choose-options__right">
                <>
                    <InfoError className="choose-options__error" />
                    <Suggest className="choose-options__suggest" />
                </>
            </div>
        </div>
    );
};

CalculatorOptions.propTypes = {
    className: PropTypes.string.isRequired,
};

export { CalculatorOptions };