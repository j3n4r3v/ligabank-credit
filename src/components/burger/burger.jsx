import PropTypes from 'prop-types';
import React from 'react';

import './burger.scss';

const Burger = ({ className }) => {

    return (
        <button className={`${className} burger`} type="button">
            <span className="visually-hidden">
                Меню
            </span>
        </button>
    );
};

Burger.propTypes = {
    className: PropTypes.string
};

export { Burger };