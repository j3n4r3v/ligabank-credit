import React from 'react';
import PropTypes from 'prop-types';

import {Preview} from "../preview/preview";
import firstSlide from './1-desktop.png';

const FirstSlide = ({ className }) => (
    <Preview className={`${className} preview--first`}
        title="Лига Банк"
        subtitle="Кредиты на любой случай"
        isLight={true}
        button={{
            title: 'Рассчитать кредит',
            href: '#calculator',
        }}
        img={{
            alt: 'Пример белой карты клиента нашего банка',
            src: firstSlide
        }} />
);

FirstSlide.propTypes = {
    className: PropTypes.string.isRequired
};

export {FirstSlide};