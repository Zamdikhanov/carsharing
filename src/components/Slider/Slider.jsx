/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Slider.scss';
import { slidesData, slideDefaultParams } from './constants';
import Slide from './Slide/Slide';

function Slider() {
    return (
        <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...slideDefaultParams}>
            {slidesData.map(slide => (
                <SwiperSlide key={slide.id}><Slide key={slide.id} {...slide} /></SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider;