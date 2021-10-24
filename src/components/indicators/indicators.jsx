import React from 'react';
import PropTypes from 'prop-types';

import { range } from '../utils/utils';

import './indicators.scss';

const Indicators = ({ className, activeIndicator, count }) => {

    return (
        <ol className={`${className} indicators`}>
            {range(count).map((i) =>
                <li className={`indicator ${activeIndicator === i && 'indicator--active'}`} key={i} />
            )}
        </ol>
    );
};

Indicators.propTypes = {
    className: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default React.memo(Indicators);
