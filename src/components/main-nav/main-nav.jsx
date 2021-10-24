import React from 'react';

import PropTypes from 'prop-types';

import { Burger } from '../burger/burger';
import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';


import './main-nav.scss';

const MainNav = ({ className }) => {

    return (
        <nav className={`${className} main-nav wrapper`}>
            <Burger className="main-nav__burger" />
            <Logo className="main-nav__logo" />
            <Menu className="main-nav__menu" />
        </nav>
    );
};

MainNav.propTypes = {
    className: PropTypes.string.isRequired
};

export { MainNav };