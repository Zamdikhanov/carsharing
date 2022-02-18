import React from 'react';
import { Link } from 'react-router-dom';
import css from './Slide.module.scss';
import imgSlide1 from './../../../assets/images/slider/slide-1.jpg';

const Slide = (props) => {
    return (
        <div className={css.slide} style={{ backgroundImage: `url(${props.url})` }} >
            <div className={css.slide__contentBox} >
                <h2 className={css.slide__title} >
                    {props.title}
                </h2>
                <div className={css.slide__description} >
                    {props.description}
                </div>
                <Link className={css.slide__button} to='#' >
                    Подробнее
                </Link>
            </div>
        </div>
    )
}

export default Slide;