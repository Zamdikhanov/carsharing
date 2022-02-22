/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Link } from 'react-router-dom';
import css from './Slide.module.scss';
import './SlideButtons.scss';

function Slide(props) {
    return (
        <div className={css.slide} style={{ backgroundImage: `url(${props.imgUrl})` }} >
            <div className={css.slide__innerDark}>
                <div className={css.slide__contentBox} >
                    <h2 className={css.slide__title} >
                        {props.title}
                    </h2>
                    <div className={css.slide__description} >
                        {props.description}
                    </div>
                    <Link className={`${css.slide__button} slide__button_${props.id}`} to='#' >
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide;