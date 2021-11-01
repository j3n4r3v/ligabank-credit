import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ desc, label, className, type, ...props}) => {
    return (
        <label className={`${className} input`}>
            <span className="input__label">
                {label}
            </span>
            <input {...props} className="input__text" type={type || 'number'} />
            <span className="input__desc">
                {desc}
            </span>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    desc: PropTypes.string,
    type: PropTypes.string,
    mask: PropTypes.string
};

export { Input };