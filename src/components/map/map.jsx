import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import {IframeMap} from '../iframe-map/iframe-map';

import './map.scss';
import '../../../node_modules/leaflet/dist/leaflet.scss'

const Map = ({ className }) => {

    return (
        <article className={`map ${className}`} id="map">
            <h2 className="map__title">Отделения Лига Банка</h2>
            <div className="map-iframe">
                <IframeMap />
            </div>
        </article>
    );
};

Map.propTypes = {
    className: PropTypes.string.isRequired
};

export { Map };