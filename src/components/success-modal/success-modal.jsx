import PropTypes from 'prop-types';
import React from 'react';
import { InfoSuccess } from '../info-block/info-block';
import { Modal } from '../modal/modal';

import './success-modal.scss';

const SuccessModal = ({ className, onChangeVisibleSuccess }) => {
    return (
        <Modal handleCloseModal={() => onChangeVisibleSuccess(false)}>

            <InfoSuccess className={className} />
            
        </Modal>
    );
};

SuccessModal.propTypes = {
    className: PropTypes.string.isRequired,
    onChangeVisibleSuccess: PropTypes.func.isRequired
};

export { SuccessModal };