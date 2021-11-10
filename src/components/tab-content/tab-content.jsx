import React from 'react';
import PropTypes from 'prop-types';

import depositsMobile from './deposits-mobile.png';
import creditsMobile from './credits-mobile.png';
import insuranceMobile from './insurance-mobile.png';
import servicesMobile from './services-mobile.png';

import depositsTablet from './deposits-tablet.png';
import creditsTablet from './credits-tablet.png';
import insuranceTablet from './insurance-tablet.png';
import servicesTablet from './services-tablet.png';

import depositsDesktop from './deposits-desktop.png';
import creditsDesktop from './credits-desktop.png';
import insuranceDesktop from './insurance-desktop.png';
import servicesDesktop from './services-desktop.png';

import './tab-content.scss';

const TabContent = ({ className, title, list, button, img, desc }) => {
    return (
        <section className={`${className} tab-content`}>
            <div className="tab-content__left">
                <h3 className="tab-content__title">
                    {title}
                </h3>
                <ul className="tab-content__list">
                    {list.map((item, index) =>
                        <li key={index + item} className="tab-content__item">
                            {item}
                        </li>
                    )}
                </ul>
                {button && <a href={button.href} className="tab-content__button">{button.title}</a>}
                {desc && <p className="tab-content__desc">{desc}</p>}
            </div>
            <div className="tab-content__right">
                {/* <img className="tab-content__img"
                    src={img.src}
                    alt={img.alt}
                /> */}
                <picture>
                    <source srcSet={img.srcTablet} media="(max-width: 768.2px)" />
                    <source srcSet={img.srcDesktop} media="(max-width: 1024.2px)" />
                    <img className="tab-content__img" src={img.srcMobile} alt={img.alt} />
                </picture>
            </div>
        </section>
    );
};

const Deposits = ({ className }) => (
    <TabContent className={className}
        title="Вклады Лига Банка – это выгодная инвестиция в свое будущее"
        list={['Проценты по вкладам до 7%', 'Разнообразные условия', 'Возможность ежемесячной капитализации или вывод процентов на банковскую карту']}
        button={{
            title: 'Узнать подробнее',
            href: '/deposits',
        }}
        img={{
            alt: 'Копилка',
            srcMobile: depositsMobile,
            srcTablet: depositsTablet,
            srcDesktop: depositsDesktop
        }} />
);

const Credits = ({ className }) => (
    <TabContent className={className}
        title="Лига Банк выдает кредиты под любые цели"
        list={['Ипотечный кредит', 'Автокредит', 'Потребительский кредит']}
        desc={<>Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <span className="text-decoration">кредитным калькулятором</span></>}
        img={{
            alt: 'Машина',
            srcMobile: creditsMobile,
            srcTablet: creditsTablet,
            srcDesktop: creditsDesktop
        }} />
);

const Insurance = ({ className }) => (
    <TabContent className={className}
        title="Лига Страхование — застрахуем все что захотите"
        list={['Автомобильное страхование', 'Страхование жизни и здоровья', 'Страхование недвижимости']}
        button={{
            title: 'Узнать подробнее',
            href: '/insurance',
        }}
        img={{
            alt: 'Замок',
            srcMobile: insuranceMobile,
            srcTablet: insuranceTablet,
            srcDesktop: insuranceDesktop

        }} />
);

const Services = ({ className }) => (
    <TabContent className={className}
        title="Лига Банк — это огромное количество онлайн-сервисов для вашего удобства"
        list={['Мобильный банк, который всегда под рукой', 'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру']}
        button={{
            title: 'Узнать подробнее',
            href: '/services',
        }}
        img={{
            alt: 'Смартфон',
            srcMobile: servicesMobile,
            srcTablet: servicesTablet,
            srcDesktop: servicesDesktop
        }} />
);

TabContent.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    srcMobile: PropTypes.string.isRequired,
    srcTablet: PropTypes.string.isRequired,
    srcDesktop: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string),
    button: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
    img: PropTypes.shape({ alt: PropTypes.string, src: PropTypes.string }),
    desc: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Deposits.propTypes = {
    className: PropTypes.string.isRequired
};

Services.propTypes = {
    className: PropTypes.string.isRequired
};

Insurance.propTypes = {
    className: PropTypes.string.isRequired
};

Credits.propTypes = {
    className: PropTypes.string.isRequired
};

export { Deposits, Credits, Insurance, Services };