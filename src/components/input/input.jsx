import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ desc, label, className, type, id }) => {
    return (
        <label className={`${className} input`} for={id}>
            <span className="input__label">
                {label}
            </span>
            <input className="input__text" type={type || 'number'} id={id} />
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