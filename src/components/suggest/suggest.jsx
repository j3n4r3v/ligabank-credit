import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../button/button';

import './suggest.scss';

const Suggest = ({ className}) => {

    return (
        <section className={`suggest ${className}`}>
            <h3 className="suggest__subtitle">Наше предложение</h3>
            <div className="suggest__wrapper">
                <div className="suggest__top">
                    <p className="suggest__result">
                         рублей
                        <small className="suggest__desc">
                            Сумма 
                        </small>
                    </p>
                    <p className="suggest__result">
                        %
                        <small className="suggest__desc">
                            Процентная ставка
                        </small>
                    </p>
                </div>
                <div className="suggest__bottom">
                    <p className="suggest__result">
                        <small className="suggest__desc">
                            Ежемесячный платеж
                        </small>
                    </p>
                    <p className="suggest__result">
                        <small className="suggest__desc">
                            Необходимый доход
                        </small>
                    </p>
                </div>
            </div>
            <Button className="suggest__button" nameButton="Оформить заявку" />
        </section>
    );
};

Suggest.propTypes = {
    className: PropTypes.string.isRequired,
};

export { Suggest };
