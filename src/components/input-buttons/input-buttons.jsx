import React from 'react';
import PropTypes from 'prop-types';

import { InputFormat } from '../input-format/input-format';

import './input-buttons.scss';

const NamesButton = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};

const InputButtons = ({ className, step, value, ...rest }) => {

    return (
        <div className={`input-buttons ${className}`}>
            <button className="input-buttons__button input-buttons__button--minus" name={NamesButton.MINUS}>−</button>
            <button className="input-buttons__button input-buttons__button--plus" name={NamesButton.PLUS}>+</button>
            <InputFormat {...rest}
                value={value}
                className="input-buttons__input" />
        </div>
    );
};

InputButtons.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    step: PropTypes.number
};

export { InputButtons };