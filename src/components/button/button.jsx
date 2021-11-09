import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ nameButton, className, ...rest }) => {

    return (
        <button className={`button ${className}`}
            {...rest}>
            {nameButton}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    nameButton: PropTypes.string.isRequired,
    type: PropTypes.string
};

export { Button };