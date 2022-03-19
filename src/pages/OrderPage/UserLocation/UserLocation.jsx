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
    const {
        selectedCity,
        selectedPoint,
        availableCities,
        availablePointsInSelectedCity,
    } = useSelector((state) => state.location);

    const [selectValueCity, setSelectValueCity] = useState(
        selectedCity
            ? {
                  value: selectedCity,
                  label: selectedCity,
              }
            : null,
    );
    const [selectValuePoint, setSelectValuePoint] = useState(
        selectedPoint
            ? {
                  value: selectedPoint,
                  label: selectedPoint,
              }
            : null,
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
        setSelectValueCity(
            selectedCity
                ? {
                      value: selectedCity,
                      label: selectedCity,
                  }
                : null,
        );
    }, [selectedCity]);

    useEffect(() => {
        setSelectValuePoint(
            selectedPoint
                ? {
                      value: selectedPoint,
                      label: selectedPoint,
                  }
                : null,
        );
    }, [selectedPoint]);

    useEffect(() => {
        if (selectedCity !== selectValueCity?.label) {
            setSelectValuePoint(null);
            dispatch(setPoint(null));
            dispatch(setCity(selectValueCity?.label));
        } else {
            setSelectValuePoint(null);
            setSelectValuePoint(
                selectedPoint
                    ? {
                          value: selectedPoint,
                          label: selectedPoint,
                      }
                    : null,
            );
        }
    }, [selectValueCity]);

    useEffect(() => {
        if (selectedPoint !== selectValuePoint?.label) {
            dispatch(setPoint(selectValuePoint?.label));
        }
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
                                inputValue ? 'город не найден' : 'нет городов'
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
                                inputValue
                                    ? 'адрес не найден'
                                    : 'сначала укажите город'
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
                <OrderData linkHref="/order/model" linkText="Выбрать модель" />
            </div>
        </div>
    );
}

export default UserLocation;
