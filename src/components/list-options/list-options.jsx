import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './list-options.scss';

const ListOptions = ({ options, className, onChange, title }) => {

    const [isOpenList, setIsOpenList] = useState(false);
    const option = useSelector(state => state.option);

    const onListClick = () => {
        setIsOpenList(!isOpenList);
    };


    return (
        <div onClick={() => onListClick()} className={`${className} list ${isOpenList ? 'list--open' : 'list--close'}`}>
            <span className="list__option list__option--title" tabIndex="0">
                {isOpenList ? title : options[option] || title}
            </span>
            {isOpenList && <div className={'list__options'}>
                {Object.keys(options).map((key, i) =>
                    <span onClick={() => onChange(key)}
                        key={key + i}
                        className="list__option"
                        tabIndex="0">
                        {options[key]}
                    </span>
                )}
            </div>}
        </div>
    );
};

ListOptions.propTypes = {
    className: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export { ListOptions };
