import React from 'react';
import PropTypes from 'prop-types';

import './tab.scss';

const Tab = ({ name, className, children }) => {
    return (
        <button
            className={`tab ${className}`}
            type="button">
            {children}
            {name}
        </button>
    );
};

Tab.propTypes = {
    className: PropTypes.string.isRequired,
    nameButton: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};

export { Tab };