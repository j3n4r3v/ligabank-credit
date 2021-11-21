import React from 'react';
import PropTypes from 'prop-types';

import { InputFormat } from '../input-format/input-format';
import { getValidValue } from '../utils/utils';

import './input-buttons.scss';

const NamesButton = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};

const InputButtons = (props) => {
    const { className, onChange, step, value, id, max, min, ...rest } = props;

    const hundleValueChange = (target) => {
        
        switch (target) {
            case NamesButton.MINUS: {
                return onChange(getValidValue((value - step), props.min, props.max));
            }
            case NamesButton.PLUS: {
                return onChange(getValidValue((value + step), props.min, props.max));
            }
            default: {
                return onChange(target);
            }
        }
    };

    return (
        <div className={`input-buttons ${className}`}>
            <button onClick={(evt) => hundleValueChange(evt.target.name)} className="input-buttons__button input-buttons__button--minus" name={NamesButton.MINUS}>−</button>
            <button onClick={(evt) => hundleValueChange(evt.target.name)} className="input-buttons__button input-buttons__button--plus" name={NamesButton.PLUS}>+</button>

            <InputFormat
                className="input-buttons__input"
                value={value}
                onChangeValue={(value) => hundleValueChange(value)}
                id={id}
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
    step: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    getValidValue: PropTypes.func
};

export { InputButtons };