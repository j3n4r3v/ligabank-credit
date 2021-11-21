import React from 'react';

import { MapContainer, TileLayer, Marker} from 'react-leaflet';

// import {ReactComponent as Icon} from './pin.svg'
import leaflet from 'leaflet';

import './leaflet.scss'
import './iframe-map.scss';

const IframeMap = () => {

   const Cities = [
    {name: "Moskow", location: {latitude: 55.603, longitude: 37.617, id: 1}},
    {name: "Kazan", location: {latitude: 55.785, longitude: 49.122, id: 2}},
    {name: "Saratov", location: {latitude: 51.530, longitude: 46.036, id: 3}},
    {name: "Tumen", location: {latitude: 57.152, longitude: 65.542, id: 4}},
    {name: "Omsk", location: {latitude: 54.994, longitude: 73.366, id: 5}}
   ];
    let icon = new leaflet.icon({
        iconUrl:  `./images/pin.svg`,
        iconSize: [37, 42]
      });

    return (
        <MapContainer center={[55.116, 61.216]} zoom={5} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

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

export { IframeMap };