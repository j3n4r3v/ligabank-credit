import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon} from 'leaflet';

import './iframe-map.scss';

const IframeMap = () => {

   const Cities = [
    {name: "Moskow", location: {latitude: 55.603, longitude: 37.617, id: 1}},
    {name: "Kazan", location: {latitude: 55.785, longitude: 49.122, id: 2}},
    {name: "Saratov", location: {latitude: 51.530, longitude: 46.036, id: 3}},
    {name: "Tumen", location: {latitude: 57.152, longitude: 65.542, id: 4}},
    {name: "Omsk", location: {latitude: 54.994, longitude: 73.366, id: 5}}
   ];
    const ICON = new Icon({
        iconUrl: `/pin.svg`,
        iconSize: [37, 42]
      });

    return (
        <MapContainer center={[55.116, 61.216]} zoom={5} scrollWheelZoom={false}>
            {Cities.map(city => (
                <Marker
                    key={city.location.id}
                    position={[
                        city.location.latitude,
                        city.location.longitude
                    ]}
                        icon={icon}
                />
            ))}
        </MapContainer>
    );
};

Map.propTypes = {
    className: PropTypes.string.isRequired
};

export { Map };