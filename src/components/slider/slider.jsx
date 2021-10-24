import React from 'react';
import PropTypes from 'prop-types';

import Indicators from '../indicators/indicators';

import './slider.scss';

const Slider = ({ className, children }) => {

    return (
        <section className={`${className} slider`}>
            <div className="slider__img">
                {children}
            </div>
            <Indicators className="slider__indicators" count={children.length} />
        </section>
    );
};

Slider.propTypes = {
    className: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string
        })),
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export { Slider };
