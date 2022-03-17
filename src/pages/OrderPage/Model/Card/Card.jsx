import { useState } from 'react';
import css from './Card.module.scss';
import carStubPicture from '../../../../assets/images/order-models/car-stub-picture.png';

function Card({ car }) {

    const [hasError, setHasError] = useState(false);

    return (
        <label className={css.card} htmlFor={car.id}>
            <input
                className={css.radio}
                type="radio"
                name="car"
                value={car.name}
                id={car.id}
            />
            <div className={css.card__inner}>
                <div className={css.info}>
                    <span className={css.name}>{car.name}</span>
                    <span className={css.price}>
                        {car.priceMin} - {car.priceMax} ₽
                    </span>
                </div>
                <div className={css.imageContainer}>
                    <img
                        onError={() => setHasError(true)}
                        className={css.carImage}
                        src={hasError ? carStubPicture : car.thumbnail.path}
                        alt={car.name}
                    />
                </div>
            </div>
        </label>
    );
}

export default Card;
