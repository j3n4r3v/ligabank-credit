import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {changeVisibleList} from '../../store/actions';

import './options-list.scss';

const OptionsList = ({ options, className, onChange, title }) => {

    const dispatch = useDispatch();
    const listMenuIsOpen = useSelector(state => state.listMenuIsOpen);

    const hundleListClick= () => {
        dispatch(changeVisibleList(!listMenuIsOpen));
    };
    const option = useSelector(state => state.option);

    const hundleKeyDown = (evt) => {
        if(evt.key === 13) {
            hundleListClick();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', hundleKeyDown);
    return () => {
        window.removeEventListener('keydown', hundleKeyDown);
        };
    });

    const hundleChange = (pam) => {
        onChange(pam);
    };

    return (
        <div className={`${className} list ${listMenuIsOpen ? 'list--open' : 'list--close'}`}
         onClick={() => hundleListClick()} onKeyDown={() => hundleListClick()}>
            <span className="list__option list__option--title" tabIndex="0">
                {listMenuIsOpen ? title : options[option] || title}
            </span>
            {listMenuIsOpen && <div className={'list__options'}>
                {Object.keys(options).map((option, i) =>
                    <span 
                        onClick={() => hundleChange(option)}
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
