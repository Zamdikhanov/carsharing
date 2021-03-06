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
                value: selectedCity?.id,
                label: selectedCity?.name,
            }
            : null,
    );
    const [selectValuePoint, setSelectValuePoint] = useState(
        selectedPoint
            ? {
                value: selectedPoint?.id,
                label: selectedPoint?.address,
            }
            : null,
    );
    const selectOptionsCities = availableCities.map((availableCity) => ({
        value: availableCity.id,
        label: availableCity.name,
    }));
    const selectOptionsPoints = availablePointsInSelectedCity.map(
        (availablePoint) => ({
            value: availablePoint.id,
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
                    value: selectedCity?.id,
                    label: selectedCity?.name,
                }
                : null,
        );
    }, [selectedCity]);

    useEffect(() => {
        setSelectValuePoint(
            selectedPoint
                ? {
                    value: selectedPoint?.id,
                    label: selectedPoint?.address,
                }
                : null,
        );
    }, [selectedPoint]);

    useEffect(() => {
        if (selectedCity?.name !== selectValueCity?.label) {
            setSelectValuePoint(null);
            dispatch(setPoint(null));
            dispatch(setCity({ name: selectValueCity?.label, id: selectValueCity?.value }));
        } else {
            setSelectValuePoint(null);
            setSelectValuePoint(
                selectedPoint
                    ? {
                        value: selectedPoint?.id,
                        label: selectedPoint?.address,
                    }
                    : null,
            );
        }
    }, [selectValueCity]);

    useEffect(() => {
        if (selectedPoint?.address !== selectValuePoint?.label) {
            dispatch(setPoint({ address: selectValuePoint?.label, id: selectValuePoint?.value }));
        }
    }, [selectValuePoint]);

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.formContainer}>
                    <div className={css.search} htmlFor="city">
                        <div className={css.search__label}>??????????</div>
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="?????????????? ?????????????? ?????????? ..."
                            isClearable="true"
                            defaultValue={selectValueCity}
                            options={selectOptionsCities}
                            id="city"
                            name="city"
                            onChange={setSelectValueCity}
                            noOptionsMessage={({ inputValue }) =>
                                inputValue ? '?????????? ???? ????????????' : '?????? ??????????????'
                            }
                        />
                    </div>
                    <div className={css.search} htmlFor="point">
                        <div className={css.search__label}>?????????? ????????????</div>
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="?????????????? ?????????????? ?????????? ..."
                            isClearable="true"
                            value={selectValuePoint}
                            options={selectOptionsPoints}
                            id="point"
                            name="point"
                            onChange={setSelectValuePoint}
                            noOptionsMessage={({ inputValue }) =>
                                inputValue
                                    ? '?????????? ???? ????????????'
                                    : '?????????????? ?????????????? ??????????'
                            }
                        />
                    </div>
                </div>
                <div className={css.description}>?????????????? ???? ??????????:</div>
                <div className={css.map}>
                    <YandexMap />
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/model"
                    linkText="?????????????? ????????????"
                    nextStep="model"
                />
            </div>
        </div>
    );
}

export default UserLocation;
