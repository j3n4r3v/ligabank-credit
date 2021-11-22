import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {changeVisibleList} from '../../store/actions';
import { ENTER_CODE } from '../utils/const';

import './options-list.scss';

const OptionsList = ({ options, className, onChange, title }) => {

    const dispatch = useDispatch();
    const listMenuIsOpen = useSelector(state => state.listMenuIsOpen);

    const handleListClick= () => {
        dispatch(changeVisibleList(!listMenuIsOpen));
    };
    const option = useSelector(state => state.option);

    const handleKeyDown = (event) => {
        if(event.keyCode === ENTER_CODE) {
            dispatch(changeVisibleList(!listMenuIsOpen));
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleChange = (option) => {
        onChange(option);
    };


    return (
        <div className={`${className} list ${listMenuIsOpen ? 'list--open' : 'list--close'}`}
         onClick={() => handleListClick()} onKeyDown={(evt) => handleKeyDown(evt)}>
            <span className="list__option list__option--title" tabIndex="0">
                {listMenuIsOpen ? title : options[option] || title}
            </span>
            {listMenuIsOpen && <div className={'list__options'}>
                {Object.keys(options).map((option, i) =>
                    <span 
                        onClick={() => handleChange(option)}
                        onKeyDown={() => onChange(option)}
                        key={option + i}
                        className="list__option"
                        tabIndex="0">
                        {options[option]}
                    </span>
                )}
            </div>}
        </div>
    );
};

OptionsList.propTypes = {
    className: PropTypes.string.isRequired,
    options: PropTypes.shape({
        MORTGAGE: PropTypes.string.isRequired,
        AUTO_CREDIT: PropTypes.string.isRequired

    }),
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export { OptionsList };
