import { checkboxArray, cars } from './constants';
import css from './Model.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import Card from './Card/Card';

function Model() {
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
                <fieldset className={css.cards}>
                    {cars.map((car) => (
                        <Card car={car} key={car.id} />
                    ))}
                </fieldset>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/more"
                    linkText="Дополнительно"
                    city="Ульяновск"
                    cityPoint="Нариманова 42"
                    carModel="Hyndai, i30 N"
                />
            </div>
        </div>
    );
}

export default Model;
