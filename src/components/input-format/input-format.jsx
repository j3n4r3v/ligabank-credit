import React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

import './input-format.scss';

const InputFormat = (props) => {

    return (
        <label className={`${props.className} input`} htmlFor={props.id}>
            <span className="input__label">
                {props.label}
            </span>

            <NumberFormat
                className="input__text"
                id={props.id}
                onBlur={props.onBlur}
                thousandSeparator={' '}
                value={props.value}
                defaultValue={''}
                suffix={' ' + props.mask}
                onValueChange={(evt) => props.onChangeValue(evt.value)}
            />
            <span className="input__desc">
                {props.desc}
            </span>
        </label>
    );
};

InputFormat.propTypes = {
    className: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    desc: PropTypes.string,
    type: PropTypes.string,
    mask: PropTypes.string,
    isAllowed: PropTypes.bool
};

export { InputFormat };
