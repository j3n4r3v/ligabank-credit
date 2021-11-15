import React from 'react';
import PropTypes from 'prop-types';

import {Preview} from "../preview/preview";
import secondSlide from './2-desktop.png';

import './second-slide.scss';

const SecondSlide = ({ className }) => (
    <Preview 
        className={`${className} preview--second`}
        title="Лига Банк"
        key="second"
        subtitle="Ваша уверенность в&nbsp;завтрашнем дне"
        isLight={false}
        img={{
            alt: 'Клиент нашего банка',
            src: secondSlide
        }} />
);

SecondSlide.propTypes = {
    className: PropTypes.string.isRequired
};

export {SecondSlide};