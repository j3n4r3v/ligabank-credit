import React from 'react';
import PropTypes from 'prop-types';

import './close-button.scss';

const CloseButton = ({ className }) => {
    return (
        <button className={`${className} close-button`} type="button">Закрыть</button>
    );
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

export { CloseButton };