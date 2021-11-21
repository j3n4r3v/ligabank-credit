import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as LogoImg } from './logo-img.svg';
import { ReactComponent as LogoText } from './logo-text.svg';

import { someValidPath } from '../utils/const';

import './logo.scss';

const Logo = ({ className }) => {
    return (
        <a href={someValidPath} className={`${className} logo`}>

            <LogoImg className="logo__img" />

            <LogoText className="logo__txt" />
            
            <span className="visually-hidden">Главная страница</span>
        </a>
    );
};

Logo.propTypes = {
    className: PropTypes.string.isRequired
};

export { Logo };