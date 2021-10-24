import React from 'react';
import PropTypes from 'prop-types';

import './input-checkbox.scss';

const InputCheckbox = ({ className, value, label }) => {

    return (
        <label className={`${className} input-checkbox`}>
            <input
                type="checkbox"
                checked={value} />
            <span>
                &nbsp;{label}
            </span>
        </label>
    );
};

InputCheckbox.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string
};

export { InputCheckbox };