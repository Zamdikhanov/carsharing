import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Model.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import Card from './Card/Card';
import {
    getAllCars,
    getCarsFromCategory,
    setSelectedCategoryId,
} from '../../../store/carModelSlice';
import Preloader from '../../../components/Preloader/Preloader';

function Model() {
    const dispatch = useDispatch();
    const { isFetching, cars, carCategory, selectedCategoryId, selectedCar } =
        useSelector((state) => state.carModel);

    useEffect(() => {
        if (cars.length < 2 && cars[0].id === null) dispatch(getAllCars());
    }, []);

    useEffect(() => {
        if (selectedCategoryId === 'allCarCategory') {
            dispatch(getAllCars());
        } else {
            dispatch(getCarsFromCategory(selectedCategoryId));
        }
    }, [selectedCategoryId]);

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <fieldset className={css.carClassContainer}>
                    {carCategory.map((checkbox) => (
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
                                checked={selectedCategoryId === checkbox.id}
                                onChange={() =>
                                    dispatch(setSelectedCategoryId(checkbox.id))
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
                            <Card
                                car={car}
                                selectedCar={selectedCar}
                                key={car.id}
                            />
                        ))}
                    </fieldset>
                )}
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/more"
                    linkText="Дополнительно"
                    nextStep="more"
                />
            </div>
        </div>
    );
}

export default Model;
