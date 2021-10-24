import PropTypes from 'prop-types';
import React from 'react';
import { InfoSuccess } from '../info-block/info-block';
import { Modal } from '../modal/modal';

import './success-modal.scss';

const SuccessModal = ({ className }) => {
    return (
        <Modal>
            <InfoSuccess className={className} />
        </Modal>
    );
};

SuccessModal.propTypes = {
    className: PropTypes.string.isRequired,
    changeVisibilitySuccess: PropTypes.func.isRequired
};

export { SuccessModal };