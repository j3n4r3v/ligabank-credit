import React from 'react';
import PropTypes from 'prop-types';

import {Preview} from "../preview/preview";
import secondSlide from './2-desktop.png';

import './second-slide.scss';

const SecondSlide = ({ className }) => (
    <Preview className={`${className} preview--second`}
        title="Лига Банк"
        subtitle="Кредиты на любой случай"
        isLight={true}
        button={{
            title: 'Рассчитать кредит',
            href: '#calculator',
        }}
        img={{
            alt: 'Пример белой карты клиента нашего банка',
            src: secondSlide
        }} />
);

SecondSlide.propTypes = {
    className: PropTypes.string.isRequired
};

export {SecondSlide};