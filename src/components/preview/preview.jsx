import React from 'react';
import PropTypes from 'prop-types';

import firstSlide from './first-slide.png';
import secondSlide from './second-slide.png';
import thirdSlide from './third-slide.png';

import './preview.scss';

const Preview = ({ className, title, subtitle, button, img, isLight }) => {
    return (
        <section className={`${className} preview ${isLight && 'preview--light'}`}>
            <div className="preview__wrapper">
                <div className="preview__left">
                    <h1 className={`preview__title ${isLight && 'preview__title--light'}`}>
                        {title}
                        <span className={'preview__subtitle'}>{subtitle}</span>
                    </h1>
                    {button &&
                        <a href={button.href}
                            className={`preview__button ${isLight && 'preview__button--light'}`}>
                            {button.title}
                        </a>
                    }
                </div>
                <div className="preview__right">
                    <img className="preview__img"
                        src={img.src}
                        alt={img.alt}
                    />
                </div>
            </div>
        </section>
    );
};

const FirstSlide = ({ className }) => (
    <Preview className={`${className} preview--first`}
        title="Лига Банк"
        subtitle="Кредиты на любой случай"
        isLight={true}
        button={{
            title: 'Рассчитать кредит',
            href: '#calculator',
        }}
        img={{
            alt: 'Пример белой карты клиента нашего банка',
            src: firstSlide
        }} />
);

const SecondSlide = ({ className }) => (
    <Preview className={`${className} preview--second`}
        title="Лига Банк"
        subtitle="Ваша уверенность в&nbsp;завтрашнем дне"
        isLight={false}
        img={{
            alt: 'Клиент нашего банка',
            src: secondSlide
        }} />
);

const ThirdSlide = ({ className }) => (
    <Preview className={`${className} preview--third`}
        title="Лига Банк"
        subtitle="Всегда рядом"
        isLight={false}
        button={{
            title: 'Найти отделение',
            href: '#map'
        }}
        img={{
            alt: 'Клиент нашего банка',
            src: thirdSlide
        }} />
);

Preview.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isLight: PropTypes.bool,
    subtitle: PropTypes.string,
    button: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
    img: PropTypes.shape({ alt: PropTypes.string, src: PropTypes.string }),
};

FirstSlide.propTypes = {
    className: PropTypes.string.isRequired
};

SecondSlide.propTypes = {
    className: PropTypes.string.isRequired
};

ThirdSlide.propTypes = {
    className: PropTypes.string.isRequired
};

export { FirstSlide, SecondSlide, ThirdSlide };
