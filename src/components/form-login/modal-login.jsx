import React, { useState, useEffect, useRef} from 'react';
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

    const topTabTrap = useRef();
    const bottomTabTrap = useRef();
    const firstFocusableElement = useRef();
    const lastFocusableElement = useRef();

    const dispatch = useDispatch();
    
    const [email, setEmail] = useState(useSelector(state => state.email));
    const [password, setPassword] = useState(localStorage.getItem('password'));
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);

    useEffect(() => {
        
        const trapFocus = (event) => {
            if (event.target === topTabTrap.current) {
                lastFocusableElement.current.focus()
            }
            if (event.target === bottomTabTrap.current) {
                firstFocusableElement.current.focus()
            }
        }

        document.addEventListener('focusin', trapFocus)

        return () => document.removeEventListener('focusin', trapFocus)


    }, [firstFocusableElement, lastFocusableElement])
  
    const onSubmitLoginModal = (evt) => {
        evt.preventDefault();
        const isEmailInvalid = validateField('email', email);
        setErrorEmail(isEmailInvalid);
        const isPasswordInvalid = validateField('password', password);
        setErrorPassword(isPasswordInvalid);

        if (!isEmailInvalid && !isPasswordInvalid) {
            saveLoginToLocalStorage({ email, password });
            dispatch(login(email, password));
            onCloseForm();
        }
    };

    const onCloseForm = () => {
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
        <Modal handleCloseModal={() => onCloseForm()} ref={lastFocusableElement}>

            <form className="modal-login" onSubmit={(evt) => onSubmitLoginModal(evt)}>
                <h2 className="visually-hidden">Введите e-mail и пароль</h2>
                <div className="modal-login__wrapper">

                    <span ref={topTabTrap} tabIndex="0" />

                    <Logo className="modal-login__logo" />

                    <Input 
                        id="email"
                        label="Логин"
                        className={`${errorEmail && 'input--error'} modal-login__input`}
                        ref={firstFocusableElement}
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
                        
                        <Input 
                            id="password"
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

                        <button className="input__password-img"
                                type="button"
                                onMouseDown={() => setIsVisiblePassword(!isVisiblePassword)}
                                name="you can see your password">

                            < PasswordTypeOn />
                            
                        </button>

                    </div>
                    <a className="modal-login__link" href="/">Забыли пароль?</a>

                    <Button
                        type="submit"
                        className="modal-login__submit"
                        nameButton="Войти"
                        name="submit info"
                      />

                </div>
                <span ref={bottomTabTrap} tabIndex="0"/>
            </form>
        </Modal>
    );
};

export { ModalLogin };