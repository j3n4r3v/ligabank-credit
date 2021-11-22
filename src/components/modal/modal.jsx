import PropTypes from 'prop-types';
import React, { useRef, useEffect} from 'react';

import { ESC_CODE } from '../utils/const';

import './modal.scss';

const Modal = ({children, onClickCloseModal}) => {

    const overlayRef = useRef();

    useEffect(() => {
            document.addEventListener('keydown', handleEscClick);
            document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener('keydown', handleEscClick);
            document.body.style.overflow = "auto"
        };
    });

    const handleEscClick = (event) => {
        if (event.keyCode === ESC_CODE) {
            onClickCloseModal();
        }
    };

    const handleOverlayClick = (evt) => {
        evt.target === overlayRef.current && onClickCloseModal();
    };

    return (
        <div className="overlay" ref={overlayRef}
            onClick={(evt) => handleOverlayClick(evt)}>
            <div className="modal">

                    {children}

            </div>
        </div>
    );
};

Modal.propTypes = {
    onClickCloseModal: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export { Modal };