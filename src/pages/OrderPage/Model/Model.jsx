import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkboxArray } from './constants';
import css from './Model.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import Card from './Card/Card';
import { getCars } from '../../../store/carModelSlice';

function Model() {
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.carModel.isFetching);
    const cars = useSelector((state) => state.carModel.cars);

    useEffect(() => {
        dispatch(getCars());
    }, []);

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <fieldset className={css.carClassContainer}>
                    {checkboxArray.map((checkbox) => (
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
                                value={checkbox.value}
                            />
                            <div className={css.carClass__label}>
                                {checkbox.label}
                            </div>
                        </label>
                    ))}
                </fieldset>
                {isFetching ? (
                    <div> download </div>
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
