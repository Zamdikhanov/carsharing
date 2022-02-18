import React from 'react';
import Slide from './Slide/Slide';
import imgSlide1 from './../../assets/images/slider/slide-1.jpg';
import imgSlide2 from './../../assets/images/slider/slide-2.jpg';
import imgSlide3 from './../../assets/images/slider/slide-3.jpg';
import imgSlide4 from './../../assets/images/slider/slide-4.jpg';

const slidesData = [
    {
        title: 'Бесплатная парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        url: imgSlide1,
        color: [],
    },
    {
        title: 'Страховка',
        description: 'Полная страховка автомобиля',
        url: imgSlide2,
        color: [],
    },
    {
        title: 'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт',
        url: imgSlide3,
        color: [],
    },
    {
        title: 'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО',
        url: imgSlide4,
        color: [],
    },
];

const Slider = () => {
    return (
        <>
            <Slide {...slidesData[0]} />
        </>
    )
}

export default Slider;