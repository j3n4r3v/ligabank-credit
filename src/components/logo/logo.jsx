import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as LogoImg } from './logo-img.svg';
import { ReactComponent as LogoText } from './logo-text.svg';

import './logo.scss';

const Logo = ({ className }) => {
    return (
        <a href="/" className={`${className} logo`}>
            <LogoImg alt="Логотип" className="logo__img" />
            <LogoText alt="Лига Банк" className="logo__txt" />
            <span className="visually-hidden">Главная страница</span>
        </a>
    );
};

Logo.propTypes = {
    className: PropTypes.string.isRequired
};

export { Logo };