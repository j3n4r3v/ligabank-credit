import React from 'react';

import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';
import { Social } from '../social/social';

import {ReactComponent as MobileIcon} from "./mobile-icon.svg"
import {ReactComponent as TelephoneIcon} from "./telephone-icon.svg"

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper wrapper">
                <div className="footer__left">
                    <div className="footer__address">

                        <Logo className="footer__logo" />

                        <p className="footer__desk">
                            150015, г.&nbsp;Москва, ул.&nbsp;Московская,&nbsp;д.&nbsp;32
                            Генеральная&nbsp;лицензия Банка&nbsp;России&nbsp;№1050
                            Ⓒ&nbsp;Лига&nbsp;Банк, 2019
                        </p>
                    </div>

                    <Menu className="footer__menu menu--column" />

                </div>
                <div className="footer__right">
                    <div className="footer__mobile">

                    <MobileIcon className="footer__mobile-icon" />

                        <a href="tel:0904" className="footer__tel">*0904</a>
                        <p className="footer__desk">Бесплатно для&nbsp;абонентов <br /> МТС, Билайн, Мегафон, Теле2</p>
                    </div>
                    <div className="footer__telephone">

                    <TelephoneIcon className="footer__telephone-icon" />

                        <a href="tel:88001112233" className="footer__tel">8 800 111 22 33</a>
                        <p className="footer__desk">Бесплатный для&nbsp;всех городов России</p>
                    </div>

                    <Social className="footer__social" />
                    
                </div>
            </div>
        </footer>
    );
};

export { Footer };