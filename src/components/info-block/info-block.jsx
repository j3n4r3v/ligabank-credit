import React from 'react';
import PropTypes from 'prop-types';

import './info-block.scss';

const InfoBlock = ({ className, title, desc, type }) => {
    return (
        <section className={`info-block ${className} info-block--${type}`}>
            <h3 className="info-block__title">{title}</h3>
            <p className="info-block__desc">{desc}</p>
        </section>
    );
};

const InfoSuccess = ({ className }) => (
    <InfoBlock title="Спасибо за обращение в наш банк."
        desc="Наш менеджер скоро свяжется с вами по указанному номеру телефона."
        type="center"
        className={className} />
);

const InfoError = ({ className }) => {

    return (
        <InfoBlock title={`Наш банк не выдаёт автомобильные кредиты меньше 200 000 рублей.`}
            desc="Попробуйте использовать другие параметры для расчёта."
            className={className} />
    );
};

InfoBlock.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    type: PropTypes.string
};

InfoBlock.defaultProps = {
    type: 'left'
};

InfoSuccess.propTypes = {
    className: PropTypes.string.isRequired
};

InfoError.propTypes = {
    className: PropTypes.string.isRequired
};

export { InfoSuccess, InfoError };
