import React from 'react';
// import Swiper, { Navigation, Pagination } from 'swiper';
import  {Swiper,  Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';
import Slide from './Slide/Slide';
import imgSlide1 from './../../assets/images/slider/slide-1.jpg';
import imgSlide2 from './../../assets/images/slider/slide-2.jpg';
import imgSlide3 from './../../assets/images/slider/slide-3.jpg';
import imgSlide4 from './../../assets/images/slider/slide-4.jpg';
import { ReactComponent as Prev } from '../../assets/icons/prev.svg';
import { ReactComponent as Next } from '../../assets/icons/next.svg';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

Swiper.use([Autoplay, EffectFade, Navigation, Pagination]);

const slidesData = [
    {
        id: 1,
        title: 'Бесплатная парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        imgUrl: imgSlide1,
        color: [12],
    },
    {
        id: 2,
        title: 'Страховка',
        description: 'Полная страховка автомобиля',
        imgUrl: imgSlide2,
        color: '[12]',
    },
    {
        id: 3,
        title: 'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт',
        imgUrl: imgSlide3,
        color: [],
    },
    {
        id: 4,
        title: 'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО',
        imgUrl: imgSlide4,
        color: [],
    },
];

const Slider = () => {
    return (
        <div className='swiper'>
            <div className='swiper-wrapper'>
                <div className="swiper-slide"><Slide {...slidesData[0]}/></div>
                <div className="swiper-slide"><Slide {...slidesData[1]}/></div>
                <div className="swiper-slide"><Slide {...slidesData[2]}/></div>
                <div className="swiper-slide"><Slide {...slidesData[3]}/></div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"><Prev /></div>
            <div className="swiper-button-next"><Next /></div>
            <div className="swiper-scrollbar"></div>
        </div>
    )
}

export default Slider;