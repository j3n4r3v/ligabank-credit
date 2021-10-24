import React from 'react';
import PropTypes from 'prop-types';

import './map.scss';

const Map = ({ className }) => {
    return (
        <article className={`map ${className}`} id="map">
            <h2 className="map__title">Отделения Лига Банка</h2>
            <iframe
                className="map__iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3464971667!2d36.82513809290739!3d55.58152447403445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1623077063555!5m2!1sru!2sru"
                width="100%" frameBorder="0" title="Наши офисы уже есть в Москве, Казани, Саратове, Тюмени и Омске" loading="lazy" />
        </article>
    );
};

Map.propTypes = {
    className: PropTypes.string.isRequired
};

export { Map };