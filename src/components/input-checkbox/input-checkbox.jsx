import React from 'react';
import PropTypes from 'prop-types';

import './input-checkbox.scss';

const InputCheckbox = ({ className, value, label, onChange }) => {

    return (
        <label className={`${className} input-checkbox`}>
            <input
                type="checkbox"
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