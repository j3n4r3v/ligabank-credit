import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { SignIn } from '../sign-in/sign-in';

import { someValidPath } from '../utils/const';

import './menu.scss';

const Menu = ({ className }) => {

    const mobileMenuIsOpen = useSelector(state => state.mobileMenuIsOpen);

    return (
        <div className={`menu ${className} ${!mobileMenuIsOpen ? 'menu--closed' : 'menu--open'}`}>
            <span className="menu__item">
                <a href={someValidPath} className="menu__link">
                    Услуги
                </a>
            </span>
            <span className="menu__item menu__item--active">
                <a href={someValidPath} className="menu__link menu__link--active">
                    Рассчитать кредит
                </a>
            </span>
            <span className="menu__item menu__item--only-header">
                <a href={someValidPath} className="menu__link">
                    Конвертер валют
                </a>
            </span>
            <span className="menu__item">
                <a href={someValidPath} className="menu__link">
                    Контакты
                </a>
            </span>
            <span className="menu__item menu__item--only-footer">
                <a href={someValidPath} className="menu__link">
                    Задать вопрос
                </a>
            </span>
            <span className="menu__item menu__item--only-burger">
                
                {mobileMenuIsOpen && <SignIn className="main-nav__sign-in" />}
                
            </span>
        </div>
    );
};

Menu.propTypes = {
    className: PropTypes.string.isRequired
};

export { Menu };
