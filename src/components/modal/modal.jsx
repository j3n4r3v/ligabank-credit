import PropTypes from 'prop-types';
import React, { useRef, useEffect} from 'react';

import { ESC_CODE } from '../utils/const';

import './modal.scss';

const Modal = ({children, onClickCloseModal}) => {

    const overlayRef = useRef();

    useEffect(() => {
        const preventWheelScroll = (evt) => evt.preventDefault();
            document.addEventListener('keydown', hundleEscClick);
            window.addEventListener('wheel', preventWheelScroll, { passive: false });
        return () => {
            document.removeEventListener('keydown', hundleEscClick);
            window.removeEventListener('wheel', preventWheelScroll);
        };
    });

    const hundleEscClick = (event) => {
        if (event.keyCode === ESC_CODE) {
            onClickCloseModal();
        }
    };

    const hundleOverlayClick = (evt) => {
        evt.target === overlayRef.current && onClickCloseModal();
    };

    console.log(children);
    return (
        <div className="overlay" ref={overlayRef}
            onClick={(evt) => hundleOverlayClick(evt)}>
            <div className="modal">

                    {children}

            </div>
        </div>
    );
};

Modal.propTypes = {
    onClickCloseModal: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export { Modal };