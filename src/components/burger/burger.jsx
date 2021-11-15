import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeVisibleMenu } from '../../store/actions';
import PropTypes from 'prop-types';

import './burger.scss';

const Burger = ({ className }) => {

    const dispatch = useDispatch();
    const mobileMenuIsOpen = useSelector(state => state.mobileMenuIsOpen);

    const onClickBurger = () => {
        dispatch(changeVisibleMenu(!mobileMenuIsOpen));
    };

    return (
        <button 
            className={`${className} burger`}
            onClick={() => onClickBurger()}
            type="button"
            name="open or closed mobile menu">
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