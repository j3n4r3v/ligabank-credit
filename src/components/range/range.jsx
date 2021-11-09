import React from 'react';
import PropTypes from 'prop-types';
import { InputFormat } from '../input-format/input-format';

import './range.scss';

const Range = ({className, label, desc, value, max, min, step, range, onChangeInput, onChangeRange, ...rest}) => {

    return (
        <div className={`${className} range`}>

            <InputFormat
                className="range__input"
                onChangeValue={(value) => onChangeInput(value)}
                label={label}
                value={value}
                {...rest}
            />

            <input
                className="range__slider"
                onChange={(evt) => onChangeRange(evt)}
                type="range"
                step={step}
                value={range}
                max={max}
                min={min}
            />

            <span className="range__desc">
                {desc}
            </span>

        </div>
    );
};

Range.propTypes = {
    className: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onChangeRange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    desc: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    range: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { Range };
