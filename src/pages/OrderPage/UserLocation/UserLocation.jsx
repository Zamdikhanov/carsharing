import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { options, pointOptions } from './constants';
import css from './UserLocation.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import YandexMap from '../../../components/YandexMap/YandexMap';
import { getAllCities, getAllPoints } from '../../../store/locationSlice';

function UserLocation() {
    const city = useSelector((state) => state.location.city);
    console.log('city=', city);
    const dispatch = useDispatch();
    dispatch(getAllCities());
    dispatch(getAllPoints());
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
                            options={options}
                            id="city"
                            name="city"
                        />
                    </div>
                    <div className={css.search} htmlFor="point">
                        <div className={css.search__label}>Пункт выдачи</div>
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="Начните вводить пункт ..."
                            isClearable="true"
                            options={pointOptions}
                            id="point"
                            name="point"
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
                    city="Ульяновск"
                    cityPoint="Нариманова 42"
                    priceMin="8 000"
                    priceMax="12 000"
                />
            </div>
        </div>
    );
}

export default UserLocation;
