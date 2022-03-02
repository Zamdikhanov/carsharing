import Select from 'react-select';
import css from './UserLocation.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import YandexMap from '../../../components/YandexMap/YandexMap';

function UserLocation() {
    const options = [
        { value: 'Ульяновск', label: 'Ульяновск' },
        { value: 'Уфа', label: 'Уфа' },
        { value: 'Уральск', label: 'Уральск' },
        { value: 'Увельский', label: 'Увельский' },
    ];
    const pointOptions = [
        { value: 'Нариманова 42', label: 'Нариманова 42' },
        { value: 'ул.Мира', label: 'ул.Мира' },
        { value: 'ул.Победы', label: 'ул.Победы' },
    ];

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.formContainer}>
                    <label className={css.search} htmlFor="city">
                        <div className={css.search__label}>Город</div>
                        {/* <div></div> */}
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="Начните вводить город ..."
                            isClearable="true"
                            options={options}
                            id="city"
                            name="city"
                        />
                    </label>
                    <label className={css.search} htmlFor="point">
                        <div className={css.search__label}>Пункт выдачи</div>
                        {/* <div></div> */}
                        <Select
                            className={css.input}
                            classNamePrefix={css.input}
                            placeholder="Начните вводить пункт ..."
                            isClearable="true"
                            options={pointOptions}
                            id="point"
                            name="point"
                        />
                    </label>
                </div>
                <div className={css.description}>Выбрать на карте:</div>
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
