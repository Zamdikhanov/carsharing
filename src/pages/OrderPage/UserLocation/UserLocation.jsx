import { useState } from 'react';
import css from './UserLocation.module.scss';
// import InputSearch from '../../../components/InputSearch/InputSearch';
import OrderData from '../../../components/OrderData/OrderData';
import YandexMap from '../../../components/YandexMap/YandexMap';

function UserLocation() {
    const [searchCity, setSearchCity] = useState('');
    const [searchPoint, setSearchPoint] = useState('');
    const handleChangeCity = (e) => {
        setSearchCity(e.target.value);
    };
    const handleChangePoint = (e) => {
        setSearchPoint(e.target.value);
    };

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.formContainer}>
                    <label className={css.search} htmlFor='city'>
                        <div className={css.search__label}>Город</div>
                        <input
                            className={css.search__input}
                            type="text"
                            id="city"
                            name="city"
                            placeholder='Начните вводить пункт ...'
                            value={searchCity}
                            onChange={handleChangeCity}
                        />
                    </label>
                    <label className={css.search} htmlFor='point'>
                        <div className={css.search__label}>Пункт выдачи</div>
                        <input
                            className={css.search__input}
                            type="text"
                            id="point"
                            name="point"
                            placeholder='Начните вводить пункт ...'
                            value={searchPoint}
                            onChange={handleChangePoint}
                        />
                    </label>
                </div>
                <div className={css.description}>
                    Выбрать на карте:
                </div>
                <div className={css.map}>
                    <YandexMap />
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData />
            </div>
        </div>
    );
}

export default UserLocation;
