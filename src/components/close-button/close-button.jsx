import React from 'react';
import PropTypes from 'prop-types';

import './close-button.scss';

const CloseButton = ({ className, onClick, ...props }) => {
    return (
        <button 
            className={`${className} close-button`}
            onClick={(evt) => onClick(evt)}
            type="button"
            name="close button"
            tabIndex="0" 
                {...props} >
              Закрыть
          </button>
    );
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

export { CloseButton };