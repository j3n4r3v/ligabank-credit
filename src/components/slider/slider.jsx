import React from 'react';
import PropTypes from 'prop-types';

import './slider.scss';

import { SLIDER_TIMEOUT } from '../utils/const';

import realIndex, { Autoplay, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import './pagination.scss';

const Slider = ({children }) => {

    const slides = document.querySelectorAll(".swiper-slide");
    console.log(slides);


    const makeAllButCurrentSlideInert = (realIndex) => {
        const currentSlide = slides[realIndex];
      
        slides.forEach((slide) => {
          if (slide !== currentSlide) {
            slide.setAttribute("inert", "");
          } else {
            slide.removeAttribute("inert");
          }
        });
      };

      const makeCurrentSlideFocus = (realIndex) => {
      const currentSlide = slides[realIndex];
      currentSlide.setAttribute("tabindex", "-1");
      currentSlide.focus();
    };

    return (

        <Swiper
            modules= {[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: false }}
            autoplay={{
                'delay': SLIDER_TIMEOUT,
                'disableOnInteraction': false
            }}
            onSlideChange={() => makeAllButCurrentSlideInert(realIndex)}
            onSwiper={() => makeAllButCurrentSlideInert(realIndex)}
            onSlideChangeTransitionEnd = {() => makeCurrentSlideFocus(realIndex)}
        >

        <section className="slider">
            <div className="slider__img">
                    {children.map((name, i) =>
                        <SwiperSlide
                            key={i+name}>
                                {name}
                        </SwiperSlide>)}
            </div>
        </section>
        </Swiper>
    );
};

Slider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string
        })),
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export { Slider };
