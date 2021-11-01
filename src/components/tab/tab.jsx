import React from 'react';
import PropTypes from 'prop-types';

import './tab.scss';

const Tab = ({ nameButton, className, children, onClick }) => {
    return (
        <button onClick={(evt) => onClick(evt)}
            className={`tab ${className}`}
            type="button">
            {children}
            {nameButton}
        </button>
    );
};

Tab.propTypes = {
    className: PropTypes.string.isRequired,
    nameButton: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export { Tab };