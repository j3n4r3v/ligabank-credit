import PropTypes from 'prop-types';
import React from 'react';

import { CloseButton } from '../close-button/close-button';

import './modal.scss';

const Modal = ({ children }) => {

    return (
        <div className="overlay" >
            <div className="modal">
                <CloseButton className="form-login__close" />
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export { Modal };