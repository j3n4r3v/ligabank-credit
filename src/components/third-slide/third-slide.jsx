import React from 'react';
import PropTypes from 'prop-types';

import {Preview} from "../preview/preview";
import thirdSlide from "./3-desktop.png";

import './third-slide.scss';

const ThirdSlide = ({ className }) => (
    <Preview
         className={`${className} preview--third`}
        title="Лига Банк"
        key="third"
        subtitle="Всегда рядом"
        isLight={false}
        button={{
            title: 'Найти отделение',
            href: '#map'
        }}
        img={{
            alt: 'Клиент нашего банка',
            src: thirdSlide
        }} />
);

ThirdSlide.propTypes = {
    className: PropTypes.string.isRequired
};

export {ThirdSlide};