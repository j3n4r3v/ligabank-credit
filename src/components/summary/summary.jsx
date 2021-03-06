import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {Button} from '../button/button';
import {InputTel} from '../input-tel/input-tel';
import {Input} from '../input/input';

import { CreditTarget } from '../utils/const';
import {getWordsLengthFromValue} from '../utils/utils'

import './summary.scss';

const Summary = ({ className, onClick}) => {

    const fieldNameLength = 8;

    const data = useSelector(state => state.data);
    const isAutoCredit = useSelector(state => state.option === CreditTarget.AUTO_CREDIT);
    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const period = useSelector(state => state.period);
    const [userData, setUserData] = useState({ name: data.name, phone: data.phone, email: data.email });
    const [error, setError] = useState({});

    const handleClick = (pam) => {
        onClick(pam);
    }

    const handleSubmitClick = () => {
        const phoneInvalid = validateField('phone', userData.phone);    
        setError((prevError) => ({ ...prevError, phone: phoneInvalid }));
        const nameInvalid = validateField('name', userData.name);
        setError((prevError) => ({ ...prevError, name: nameInvalid }));
        const emailInvalid = validateField('email', userData.email);
        setError((prevError) => ({ ...prevError, email: emailInvalid }));
        if (!emailInvalid && !phoneInvalid && !nameInvalid) {
            setError({});
            handleClick(userData);
        }
    };

    const validateField = (fieldName, value) => {

        switch (fieldName) {

            case 'email': {
                return value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? '' : 'Email введен некорректно'
                }
            case 'phone': {
                return value && value.match(/(\+7|8)\d{3}-\d{3}-\d{2}-\d{2}/i)
                    ? '' : 'Телефон введен некорректно'
                }
            case 'name': {
                return value && value.length > fieldNameLength
                    ? '' : 'ФИО не заполнено'
                }
            default: {
                break
            }
        }
    };

    if (!data) {
        return;
    }

    return (
        <section className={`summary ${className}`}>
            <h3 className="summary__subtitle">Шаг 3. Оформление заявки</h3>
            <ul className="summary__list">
                <li className="summary__item list__item">
                    <span className="item__title">Номер заявки</span>
                    <span className="item__value">№001</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Цель кредита</span>
                    <span className="item__value">{isAutoCredit ? 'Автомобильное кредитование' : 'Ипотека'}</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Стоимость {isAutoCredit ? 'автомобиля' : 'недвижимости'}  </span>
                    <span className="item__value">{cost.toLocaleString()} рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Первоначальный взнос</span>
                    <span className="item__value">{fee.toLocaleString()} рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Срок кредитования</span>
                    <span className="item__value">{getWordsLengthFromValue(period , ['лет', 'года', 'лет'])}</span>
                </li>
            </ul>
            <Input
                className={`summary__input ${error.name && 'input--error'}`}
                id="identity"
                onChange={(evt) => {
                    setError({ ...error, name: '' });
                    setUserData({ ...userData, name: evt.target.value });
                }}
                autoFocus
                defaultValue={userData.name}
                desc={error.name}
                placeholder="ФИО"
                name = "identity-input"
                type="string"
            />
            <div className="summary__group">

                <InputTel
                    className={`summary__input ${error.phone && 'input--error'}`}
                    id="tel"
                    onChange={(evt) => {
                        setError({ ...error, phone: '' });
                        setUserData({ ...userData, phone: evt.target.value });
                    }}
                    value={userData.phone}
                    desc={error.phone}
                    name = "tel-input"
                    placeholder="Телефон"
                />

                <Input
                    className={`summary__input ${error.email && 'input--error'}`}
                    id="email"
                    onChange={(evt) => {
                        setError({ ...error, email: '' });
                        setUserData({ ...userData, email: evt.target.value });
                    }}
                    defaultValue={userData.email}
                    desc={error.email}
                    placeholder="E-mail"
                    type="email"
                    name ="email-input"
                />

            </div>

            <Button
                className="summary__submit"
                nameButton="Отправить"
                onClick={() => handleSubmitClick()}
                name="submit summary info by credit"
            />

        </section>
    );
};

Summary.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired

};

export {Summary};
