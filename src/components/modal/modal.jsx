import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

import { ESC_CODE } from '../utils/const';
import { CloseButton } from '../close-button/close-button';

import './modal.scss';

const Modal = ({ children, closeModal }) => {

    const overlayRef = useRef();

    useEffect(() => {
        const preventWheelScroll = (evt) => evt.preventDefault();
        document.addEventListener('keydown', onEscClick);
        window.addEventListener('wheel', preventWheelScroll, { passive: false });
        return () => {
            document.removeEventListener('keydown', onEscClick);
            window.removeEventListener('wheel', preventWheelScroll);
        };
    });

    const onCloseModalButtonClick = () => {
        closeModal();
    };

    const onEscClick = (event) => {
        if (event.keyCode === ESC_CODE) {
            closeModal();
        }
    };

    const onOverlayClick = (evt) => {
        evt.target === overlayRef.current && closeModal();
    };

    return (
        <div className="overlay" ref={overlayRef}
            onClick={(evt) => onOverlayClick(evt)}>
            <div className="modal">
                <CloseButton className="modal-login__close"
                    onClick={() => onCloseModalButtonClick()} />
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