import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Burger } from '../burger/burger';
import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';
import { SignIn } from '../sign-in/sign-in';

import { CloseButton } from '../close-button/close-button';
import { ESC_CODE } from '../utils/const';
import { changeVisibleMenu } from '../../store/actions';

import './main-nav.scss';

const MainNav = ({ className }) => {

    const dispatch = useDispatch();
    const mobileMenuIsOpen = useSelector(state => state.mobileMenuIsOpen);

    useEffect(() => {
        if (mobileMenuIsOpen) {
            document.addEventListener('keydown', onEscClick);
        }
        return () => {
            document.removeEventListener('keydown', onEscClick);
        };
    });

    const onEscClick = (event) => {
        if (event.keyCode === ESC_CODE) {
            onClickClose();
        }
    };

    const onClickClose = () => {
        dispatch(changeVisibleMenu(!mobileMenuIsOpen));
    };

    return (
        <nav className={`${className} main-nav wrapper`}>

            <Burger className="main-nav__burger" />

            <Logo className="main-nav__logo" />

            <Menu className="main-nav__menu" />

            {mobileMenuIsOpen

                ? <CloseButton className="main-nav__close" onClick={() => onClickClose()} />

                : <SignIn className="main-nav__sign-in" />
            }
            
        </nav>
    );
};

MainNav.propTypes = {
    className: PropTypes.string.isRequired
};

export { MainNav };