import React from 'react';
import PropTypes from 'prop-types';

import './input-checkbox.scss';

const InputCheckbox = ({ className, value, label, onChange, id }) => {

    return (
        <label className={`${className} input-checkbox`} htmlFor={id}>
            <input
                type="checkbox"
                id={id}
                onChange={(evt) => onChange(evt.target.checked)}
                checked={value} />
            <span>
                &nbsp;{label}
            </span>
        </label>
    );
};

InputCheckbox.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export { InputCheckbox };