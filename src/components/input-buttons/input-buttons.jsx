import React from 'react';
import PropTypes from 'prop-types';

import { InputFormat } from '../input-format/input-format';

import './input-buttons.scss';

const NamesButton = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};

const InputButtons = ({ className, onChange, step, value, ...rest }) => {

    const onValueChange = (target) => {
        switch (target) {
            case NamesButton.MINUS:
                return onChange(value - step);
            case NamesButton.PLUS:
                return onChange(value + step);
            default:
                return onChange(target);
        }
    };

    return (
        <div className={`input-buttons ${className}`}>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="input-buttons__button input-buttons__button--minus" name={NamesButton.MINUS}>−</button>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="input-buttons__button input-buttons__button--plus" name={NamesButton.PLUS}>+</button>

            <InputFormat
                className="input-buttons__input"
                value={value}
                onChangeValue={(value) => onValueChange(value)}
                {...rest}
            />
        </div>
    );
};

InputButtons.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    step: PropTypes.number
};

export { InputButtons };