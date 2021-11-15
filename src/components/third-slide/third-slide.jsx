import React from 'react';
import PropTypes from 'prop-types';

import {Preview} from "../preview/preview";
import thirdSlide from "./3-desktop.png";

const ThirdSlide = ({ className }) => (
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
            src: thirdSlide
        }} />
);

ThirdSlide.propTypes = {
    className: PropTypes.string.isRequired
};

export {ThirdSlide};