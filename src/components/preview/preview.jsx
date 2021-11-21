import React from 'react';
import PropTypes from 'prop-types';

import './preview.scss';

const Preview = ({ className, title, subtitle, button, img, isLight }) => {
    const widthAuto = 'auto';
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
                  <img className="preview__img" src={img.src} alt={img.alt} width={widthAuto}   />
                </div>
            </div>
        </section>
    );
};

Preview.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isLight: PropTypes.bool,
    subtitle: PropTypes.string,
    button: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
    img: PropTypes.shape({ alt: PropTypes.string, src: PropTypes.string }),
};

export {Preview};
