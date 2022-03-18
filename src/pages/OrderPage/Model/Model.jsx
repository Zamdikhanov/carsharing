import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Model.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import Card from './Card/Card';
import {
    getCars,
    setSelectedCategoryIndex,
} from '../../../store/carModelSlice';
import Preloader from '../../../components/Preloader/Preloader';

function Model() {
    const dispatch = useDispatch();
    const { isFetching, cars, carCategory, selectedCategoryIndex } =
        useSelector((state) => state.carModel);

    useEffect(() => {
        if (cars.length < 2 && cars[0].id === null) dispatch(getCars());
    }, []);

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <fieldset className={css.carClassContainer}>
                    {carCategory.map((checkbox, index) => (
                        <label
                            className={css.carClass}
                            htmlFor={checkbox.id}
                            key={checkbox.id}
                        >
                            <input
                                className={css.carClass__input}
                                type="radio"
                                name="carClass"
                                id={checkbox.id}
                                value={checkbox.name}
                                checked={selectedCategoryIndex === index}
                                onClick={() =>
                                    dispatch(setSelectedCategoryIndex(index))
                                }
                            />
                            <div className={css.carClass__label}>
                                {checkbox.name}
                            </div>
                        </label>
                    ))}
                </fieldset>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <fieldset className={css.cards}>
                        {cars.map((car) => (
                            <Card car={car} key={car.id} />
                        ))}
                    </fieldset>
                )}
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/more"
                    linkText="Дополнительно"
                    city="Ульяновск"
                    cityPoint="Нариманова 42"
                    carModel="Hyndai, i30 N"
                    priceMin="10 000"
                    priceMax="32 000"
                />
            </div>
        </div>
    );
}

export default Model;
