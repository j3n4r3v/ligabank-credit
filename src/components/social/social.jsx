import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as FacebookIcon} from "./facebook-icon.svg";
import {ReactComponent as InstagramIcon} from "./instagram-icon.svg";
import {ReactComponent as TwitterIcon} from "./twitter-icon.svg";
import {ReactComponent as YoutubeIcon} from "./youtube-icon.svg";

import './social.scss';

const Social = ({ className }) => {
    return (
        <ul className={`${className} social`}>
            <li className="social__item">
                <a className="social__link social__link--facebook" href="/">
                    <span className="visually-hidden">
                        Фейсбук
                    </span>

                    <FacebookIcon className="social__link-icon" />

                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--instagram" href="/">
                    <span className="visually-hidden">
                        Инстаграм
                    </span>

                    <InstagramIcon className="social__link-icon" />

                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--twitter" href="/">
                    <span className="visually-hidden">
                        Твиттер
                    </span>

                    <TwitterIcon className="social__link-icon" />

                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--youtube" href="/">
                    <span className="visually-hidden">
                        Youtube
                    </span>

                    <YoutubeIcon className="social__link-icon" />

                </a>
            </li>
        </ul>
    );
};

Social.propTypes = {
    className: PropTypes.string.isRequired
};

export { Social };
