import React from 'react';
import Slide from './Slide/Slide';
import imgSlide1 from './../../assets/images/slider/slide-1.jpg';
import imgSlide2 from './../../assets/images/slider/slide-2.jpg';
import imgSlide3 from './../../assets/images/slider/slide-3.jpg';
import imgSlide4 from './../../assets/images/slider/slide-4.jpg';

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
        <>
            <Slide {...slidesData[0]} />
        </>
    )
}

export default Slider;