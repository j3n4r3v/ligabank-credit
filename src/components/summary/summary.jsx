import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '../button/button';
import {InputTel} from '../input-tel/input-tel';
import {Input} from '../input/input';

import './summary.scss';

const Summary = ({className}) => {

    return (
        <section className={`summary ${className}`}>
            <h3 className="summary__subtitle">Шаг 3. Оформление заявки</h3>
            <ul className="summary__list">
                <li className="summary__item list__item">
                    <span className="item__title">Номер заявки</span>
                    <span className="item__value">№</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Цель кредита</span>
                    <span className="item__value">Автомобильное кредитование</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Стоимость</span>
                    <span className="item__value">рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Первоначальный взнос</span>
                    <span className="item__value"> рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Срок кредитования</span>
                    <span className="item__value"></span>
                </li>
            </ul>
            <Input className={`summary__input`}
                         autoFocus
                         placeholder="ФИО"
                         type="string"/>
            <div className="summary__group">
                <InputTel className={`summary__input `}
                          placeholder="Телефон"/>
                <Input className={`summary__input `}
                             placeholder="E-mail"
                             type="email"/>
            </div>
            <Button className="summary__submit" nameButton="Отправить" />

        </section>
    );
};

Summary.propTypes = {
    className: PropTypes.string.isRequired,

};

export {Summary};
