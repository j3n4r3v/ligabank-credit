import PropTypes from 'prop-types';
import React from 'react';
import { InfoSuccess } from '../info-block/info-block';
import { Modal} from '../modal/modal';
import { CloseButton } from '../close-button/close-button';

import './success-modal.scss';

const SuccessModal = ({ className, onChangeVisibleSuccess }) => {
    return (
        <Modal onClickCloseModal={() => onChangeVisibleSuccess(false)}>
            
            <CloseButton
                    className="close-button"
                    onClick={() => onChangeVisibleSuccess()}
            />

            <InfoSuccess className={className} />
            
        </Modal>
    );
};

SuccessModal.propTypes = {
    className: PropTypes.string.isRequired,
    onChangeVisibleSuccess: PropTypes.func.isRequired
};

export { SuccessModal };