import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './options-list.scss';

const OptionsList = ({ options, className, onChange, title }) => {

    const [isOpenList, setIsOpenList] = useState(false);
    const option = useSelector(state => state.option);

    const hundleListClick = () => {
        setIsOpenList(!isOpenList);
    };

    const hundleChange = (pam) => {
        onChange(pam);
    };

    return (
        <div onClick={() => hundleListClick()} className={`${className} list ${isOpenList ? 'list--open' : 'list--close'}`}>
            <span className="list__option list__option--title" tabIndex="0">
                {isOpenList ? title : options[option] || title}
            </span>
            {isOpenList && <div className={'list__options'}>
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
