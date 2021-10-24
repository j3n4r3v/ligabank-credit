import React from 'react';
import PropTypes from 'prop-types';

import MaskedInput from 'react-maskedinput';

const InputTel = (props) => {
    const newValue = props.value ? props.value.toString() : '';
    return (
        <label className={`${props.className} input`}>
            <span className="input__label">
                {props.label}
            </span>
            <MaskedInput {...props} value={newValue} mask="+7111-111-11-11" className="input__text" type="text" />
            <span className="input__desc">
                {props.desc}
            </span>
        </label>
    );
};

InputTel.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    desc: PropTypes.string,
    type: PropTypes.string
};

export { InputTel };