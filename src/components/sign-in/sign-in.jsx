import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { changeVisibleModalLogin, logout } from '../../store/actions';
import { saveStatusisLoginToLocalStorage } from '../../store/local-storage';

import { ReactComponent as SignInImg } from './sign-in.svg';

import './sign-in.scss';

const SignIn = ({ className }) => {

    const dispatch = useDispatch();
    const mobileMenuIsOpen = useSelector(state => state.mobileMenuIsOpen);
    const email = useSelector(state => state.email);
    const isLogin = useSelector(state => state.isLogin);

    const onSignInClick = () => {
        if (isLogin) {
            saveStatusisLoginToLocalStorage(false);
            dispatch(logout());
            localStorage.clear();
        } else {
            dispatch(changeVisibleModalLogin(true));
        }
    };


    return (
        <div className={`${className} sign-in ${mobileMenuIsOpen ? 'sign-in__mobile--burger' : ''} `}>
            <button type="button" className="sign-in__button" name="sign in" onClick={() => onSignInClick()}>

                <SignInImg />

                <span className={mobileMenuIsOpen ? 'sign-in__text--burger' : 'sign-in__text'}>

                    {isLogin && email ? email : 'Войти в Интернет-банк'}
                    
                </span>
            </button>
        </div>
    );
};

SignIn.propTypes = {
    className: PropTypes.string.isRequired
};

export { SignIn };