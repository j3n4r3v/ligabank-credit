import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeVisibleModalLogin, login } from '../../store/actions';
import { saveLoginToLocalStorage } from '../../store/local-storage';
import { getWordsLengthFromValue } from '../utils/utils';
import { PASSWORD_LENGTH } from '../utils/const';

import { Input } from '../input/input';
import { Logo } from '../logo/logo';
import { Modal } from '../modal/modal';

import { ReactComponent as PasswordTypeOn } from './password-type-on.svg';

import './modal-login.scss';

const ModalLogin = ({onClickCloseModal}) => {

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

        return () =>
         document.removeEventListener('focusin', trapFocus)


    }, [firstFocusableElement, lastFocusableElement])
  
    const handleSubmitLoginModal = (evt) => {
        evt.preventDefault();
        const isEmailInvalid = validateField('email', email);
        setErrorEmail(isEmailInvalid);
        const isPasswordInvalid = validateField('password', password);
        setErrorPassword(isPasswordInvalid);

        if (!isEmailInvalid && !isPasswordInvalid) {
            saveLoginToLocalStorage({ email, password });
            dispatch(login(email, password));
            handleClosePopup();
        }
    };

    const handleClosePopup = () => {
        setErrorEmail('');
        setErrorPassword('');
        setEmail('');
        setPassword('');
        dispatch(changeVisibleModalLogin(false));
        localStorage.clear();
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {

            case 'email': {
                return value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? '' : 'Email ???????????? ??????????????????????' 
                }

            case 'password': {
                return value && value.length >= PASSWORD_LENGTH
                    ? '' : `???????????? ???????????? ???????? ???????????? ${getWordsLengthFromValue(PASSWORD_LENGTH, ['????????????', '??????????????', '????????????????'])}`;
            }
            
            default: {
                break;
            }
        }
    };

    return (

        <Modal onClickCloseModal={() => handleClosePopup()}>

            <form className="modal-login" onSubmit={(evt) => handleSubmitLoginModal(evt)}>
                <h2 className="visually-hidden">?????????????? e-mail ?? ????????????</h2>
                <div className="modal-login__wrapper">

                    <span ref={topTabTrap} tabIndex="0" />

                    <button 
                        className= "modal-login__close close-button"
                        onClick={() => handleClosePopup()}
                        type="button"
                        name="close button"
                        tabIndex="0"
                        ref={firstFocusableElement}
                            >??????????????
                    </button>

                    <Logo className="modal-login__logo" />

                    <Input 
                        id="email"
                        label="??????????"
                        className={`${errorEmail && 'input--error'} modal-login__input`}
                        type="email"
                        defaultValue={''}
                        autoFocus
                        desc={errorEmail}
                        onChange={(evt) => {
                            setErrorEmail('');
                            setEmail(evt.target.value);
                        }}
                        name="email"
                    />
                    <div className="modal-login__input-wrapper">
                        
                        <Input 
                            id="password"
                            label="????????????"
                            className={`${errorPassword && 'input--error'} modal-login__input input--password`}
                            type={isVisiblePassword ? 'text' : 'password'}
                            defaultValue={''}
                            desc={errorPassword}
                            onChange={(evt) => {
                                setErrorPassword('');
                                setPassword(evt.target.value);
                            }}
                            name="password"
                        />

                        <button className="input__password-img"
                                type="button"
                                onMouseDown={() => setIsVisiblePassword(!isVisiblePassword)}
                                name="you can see your password">

                            < PasswordTypeOn />
                            
                        </button>

                    </div>
                    <a className="modal-login__link"
                        href="/">???????????? ?????????????</a>

                    <button
                        type="submit"
                        ref={lastFocusableElement}
                        className="button modal-login__submit"
                        name="submit info"
                    >??????????</button>

                </div>
                <span ref={bottomTabTrap} tabIndex="0"/>
            </form>
        </Modal>

    );
};

export { ModalLogin};