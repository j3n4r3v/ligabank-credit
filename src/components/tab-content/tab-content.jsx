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
    const minWidth = 87;
    const minHeight = 113;
    return (
        <section className={`${className} tab-content`}>
            <div className="tab-content__left">

                <div className="tab-content__info">
                    <h3 className="tab-content__title">
                        {title}
                    </h3>
                    <ul className="tab-content__list">

                    {list.map((item, i) =>
                        <li key={i + item} className="tab-content__item">
                            {item}
                        </li>
                    )}
                    </ul>
                    {desc && <p className="tab-content__desc">{desc}</p>}
                </div>

                <div className="tab-content__button">
                    {button && <a href={button.href} className="tab-content__btn">{button.title}</a>}
                </div>
            </div>
  
            <div className="tab-content__right">
                <picture>
                    <source srcSet={img.srcDesktop} media="(min-width: 1024.2px)" />
                    <source srcSet={img.srcTablet} media="(min-width: 768.2px)" />
                        <img className="tab-content__img"
                         src={img.srcMobile}
                          alt={img.alt}
                          width= {minWidth}
                          height= {minHeight}
                        />
                </picture>
            </div>

        </section>
    );
};

const Deposit = ({ className }) => (
    <TabContent
        className={className}
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

const Credit = ({ className }) => (
    <TabContent
        className={className}
        title="Лига Банк выдает кредиты под любые цели"
        list={['Ипотечный кредит', 'Автокредит', 'Потребительский кредит']}
        desc={<>Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <a href ="#calculator" className="text-decoration calculator-ref">кредитным калькулятором</a>
             </>}
        img={{
            alt: 'Машина',
            srcMobile: creditsMobile,
            srcTablet: creditsTablet,
            srcDesktop: creditsDesktop
        }} />
);

const Insurance = ({ className }) => (
    <TabContent
        className={className}
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

const Service = ({ className }) => (
    <TabContent
        className={className}
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
    list: PropTypes.arrayOf(PropTypes.string),
    button: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
    img: PropTypes.shape({ alt: PropTypes.string, src: PropTypes.string }),
    desc: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

Deposit.propTypes = {
    className: PropTypes.string.isRequired
};

Service.propTypes = {
    className: PropTypes.string.isRequired
};

Insurance.propTypes = {
    className: PropTypes.string.isRequired
};

Credit.propTypes = {
    className: PropTypes.string.isRequired
};

export { Deposit, Credit, Insurance, Service };