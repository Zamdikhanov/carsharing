import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import css from './UserLocation.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import YandexMap from '../../../components/YandexMap/YandexMap';
import {
    getAllLocations,
    setCity,
    setPoint,
} from '../../../store/locationSlice';

function UserLocation() {
    const dispatch = useDispatch();
    const selectedCity = useSelector((state) => state.location.selectedCity);
    const selectedPoint = useSelector((state) => state.location.selectedPoint);
    const availableCities = useSelector(
        (state) => state.location.availableCities,
    );
    const availablePointsInSelectedCity = useSelector(
        (state) => state.location.availablePointsInSelectedCity,
    );

    const [selectValueCity, setSelectValueCity] = useState(
        selectedCity && {
            value: selectedCity,
            label: selectedCity,
        },
    );
    const [selectValuePoint, setSelectValuePoint] = useState(
        selectedPoint && {
            value: selectedPoint,
            label: selectedPoint,
        },
    );
    const selectOptionsCities = availableCities.map((availableCity) => ({
        value: availableCity.name,
        label: availableCity.name,
    }));
    const selectOptionsPoints = availablePointsInSelectedCity.map(
        (availablePoint) => ({
            value: availablePoint.address,
            label: availablePoint.address,
        }),
    );

    useEffect(() => {
        dispatch(getAllLocations());
    }, []);

    useEffect(() => {
        if (selectValueCity?.label !== selectedCity) {
            setSelectValuePoint(null);
            dispatch(setPoint(null));
        }
        dispatch(setCity(selectValueCity?.label));
    }, [selectValueCity]);

    useEffect(() => {
        dispatch(setPoint(selectValuePoint?.label));
    }, [selectValuePoint]);

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.formContainer}>
                    <div className={css.search} htmlFor="city">
                        <div className={css.search__label}>Город</div>
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="Начните вводить город ..."
                            isClearable="true"
                            defaultValue={selectValueCity}
                            options={selectOptionsCities}
                            id="city"
                            name="city"
                            onChange={setSelectValueCity}
                            noOptionsMessage={({ inputValue }) =>
                                (!inputValue && 'нет городов') ||
                                'город не найден'
                            }
                        />
                    </div>
                    <div className={css.search} htmlFor="point">
                        <div className={css.search__label}>Пункт выдачи</div>
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="Начните вводить пункт ..."
                            isClearable="true"
                            value={selectValuePoint}
                            options={selectOptionsPoints}
                            id="point"
                            name="point"
                            onChange={setSelectValuePoint}
                            noOptionsMessage={({ inputValue }) =>
                                (!inputValue && 'сначала укажите город') ||
                                'адрес не найден'
                            }
                        />
                    </div>
                </div>
                <div className={css.description}>Выбрать на карте:</div>
                <div className={css.map}>
                    <YandexMap />
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/model"
                    linkText="Выбрать модель"
                    city={selectedCity}
                    cityPoint={selectedPoint}
                    priceMin={selectedPoint ? "8 000" : ' *** '}
                    priceMax={selectedPoint ? "80 000" : ' *** '}
                />
            </div>
        </div>
    );
}

export default UserLocation;
