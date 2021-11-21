import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import './map.scss';
import '../../../node_modules/leaflet/dist/leaflet.scss'

const Map = ({ className }) => {

    const ICON = leaflet.icon({
        iconUrl: `./`,
        iconSize: [27, 39]
      });

    return (
        <article className={`map ${className}`} id="map">
            <h2 className="map__title">Отделения Лига Банка</h2>
            <iframe
             className="map__iframe" scrolling="no" marginheight="0" marginwidth="0"
             src="https://www.openstreetmap.org/export/embed.html?bbox=30.805664062500004%2C44.96479793033104%2C93.6474609375%2C64.69910544204765&amp;layer=mapnik"
             title="Наши офисы уже есть в Москве, Казани, Саратове, Тюмени и Омске" loading="lazy"/>
        </article>
    );
};

Map.propTypes = {
    className: PropTypes.string.isRequired
};

export { Map };