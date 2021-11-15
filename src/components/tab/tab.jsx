import React from 'react';
import PropTypes from 'prop-types';

import './tab.scss';

const Tab = ({ nameButton, className, children, onClick }) => {

    const hundleClick =() => {
        onClick ();
    }

    return (
        <button
            onClick={(evt) => hundleClick(evt)}
            className={`tab ${className}`}
            type="button"
            name="tab name">
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