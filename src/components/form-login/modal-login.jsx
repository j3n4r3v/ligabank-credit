import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeVisibleModalLogin, login } from '../../store/actions';
import { saveLoginToLocalStorage } from '../../store/local-storage';
import { getWordsLengthFromValue } from '../utils/utils';
import { PASSWORD_LENGTH } from '../utils/const';

import { Button } from '../button/button';
import { Input } from '../input/input';
import { Logo } from '../logo/logo';
import { Modal } from '../modal/modal';

import { ReactComponent as PasswordTypeOn } from './password-type-on.svg';

import './modal-login.scss';

const ModalLogin = () => {

    const [email, setEmail] = useState(useSelector(state => state.email));
    const [password, setPassword] = useState(localStorage.getItem('password'));
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const dispatch = useDispatch();

    const handleSubmitLoginModal = (evt) => {
        evt.preventDefault();
        const isEmailInvalid = validateField('email', email);
        setErrorEmail(isEmailInvalid);
        const isPasswordInvalid = validateField('password', password);
        setErrorPassword(isPasswordInvalid);

        if (!isEmailInvalid && !isPasswordInvalid) {
            saveLoginToLocalStorage({ email, password });
            dispatch(login(email, password));
            closeForm();
        }
    };

    const closeForm = () => {
        setErrorEmail('');
        setErrorPassword('');
        setEmail('');
        setPassword('');
        dispatch(changeVisibleModalLogin(false));
        localStorage.clear();
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'email':
                return value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? '' : 'Email введен некорректно';
            case 'password':
                return value && value.length >= PASSWORD_LENGTH
                    ? '' : `Пароль должен быть больше ${getWordsLengthFromValue(PASSWORD_LENGTH, ['символ', 'символа', 'символов'])}`;
            default:
                break;
        }
    };

    return (
        <Modal closeModal={() => closeForm()}>
            <form className="modal-login" onSubmit={(evt) => handleSubmitLoginModal(evt)}>
                <h2 className="visually-hidden">Введите e-mail и пароль</h2>
                <div className="modal-login__wrapper">
                    <Logo className="modal-login__logo" />
                    <Input id="email"
                        label="Логин"
                        className={`${errorEmail && 'input--error'} modal-login__input`}
                        type="email"
                        defaultValue={''}
                        autoFocus
                        desc={errorEmail}
                        onChange={(evt) => {
                            setErrorEmail('');
                            setEmail(evt.target.value);
                        }}
                    />
                    <div className="modal-login__input-wrapper">
                        <Input id="password"
                            label="Пароль"
                            className={`${errorPassword && 'input--error'} modal-login__input input--password`}
                            type={isVisiblePassword ? 'text' : 'password'}
                            defaultValue={''}
                            desc={errorPassword}
                            onChange={(evt) => {
                                setErrorPassword('');
                                setPassword(evt.target.value);
                            }}
                        />
                        <button className="input__password-img" type="button" onMouseDown={() => setIsVisiblePassword(!isVisiblePassword)}>
                            < PasswordTypeOn />
                        </button>
                    </div>
                    <a className="modal-login__link" href="/">Забыли пароль?</a>
                    <Button type="submit" className="modal-login__submit" nameButton="Войти" />
                </div>
            </form>
        </Modal>
    );
};

export { ModalLogin };