import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';

const Select = ({ options, className }) => {
    
    return (
        <div className={`${className} select select--open`}>
            <span className="select__option select__option--title" tabIndex="0">
            </span>
                <ul className={'select__options'}>
                    {Object.keys(options).map((key, i) =>
                        <span
                            key={key + i}
                            className="select__option"
                            tabIndex="0">
                            {options[key]}
                        </span>
                    )}
                </ul>
        </div>
    );
};

Select.propTypes = {
    className: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export { Select };
