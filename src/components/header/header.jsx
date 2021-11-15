import React from 'react';

import { MainNav } from '../main-nav/main-nav';

import {FirstSlide} from '../first-slide/first-slide';
import {SecondSlide} from '../second-slide/second-slide';
import {ThirdSlide } from '../third-slide/third-slide';

import { Slider } from '../slider/slider';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
            
            <MainNav className="header__nav" />

            <Slider className="header__slider">

                <FirstSlide className="header__first-slide" />
                <SecondSlide className="header__second-slide" />
                <ThirdSlide className="header__third-slide" />

            </Slider>
        </header>
    );
};

export { Header };