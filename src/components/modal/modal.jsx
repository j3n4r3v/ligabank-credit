import PropTypes from 'prop-types';
import React, { useRef, useEffect} from 'react';

import { ESC_CODE } from '../utils/const';

import './modal.scss';

const Modal = ({children, onClickCloseModal}) => {

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

    const onEscClick = (event) => {
        if (event.keyCode === ESC_CODE) {
            onClickCloseModal();
        }
    };

    const onOverlayClick = (evt) => {
        evt.target === overlayRef.current && onClickCloseModal();
    };

    return (
        <div className="overlay" ref={overlayRef}
            onClick={(evt) => onOverlayClick(evt)}>
            <div className="modal">

                    {children}

            </div>
        </div>
    );
};

Modal.propTypes = {
    onClickCloseModal: PropTypes.func.isRequired,
    children: PropTypes.any
};

export { Modal };