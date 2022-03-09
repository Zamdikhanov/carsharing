import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { useState } from 'react';
import { colorArray, rateArray, additionalServicesArray } from './constants';
import css from './More.module.scss';
import OrderData from '../../../components/OrderData/OrderData';

registerLocale('ru', ru);

function More() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const settingsDatePicker = {
        className: css.dateInput,
        clearButtonClassName: css.clearButton,
        placeholderText: 'Введите дату и время',
        dateFormat: 'dd.MM.yyyy HH:mm ',
        locale: 'ru',
        startDate,
        endDate,
        showTimeSelect: true,
        isClearable: true,
    };

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        const selectedEndTime = endDate
            ? new Date(endDate)
            : new Date(3000, 1, 1);
        return (
            currentDate.getTime() < selectedDate.getTime() &&
            selectedDate.getTime() < selectedEndTime.getTime()
        );
    };

    const filterFutureTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        const selectedStartTime = startDate ? new Date(startDate) : new Date();
        return (
            currentDate.getTime() <= selectedDate.getTime() &&
            selectedDate.getTime() > selectedStartTime.getTime()
        );
    };

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.inputDataTitle}>Цвета</div>
                <fieldset className={css.radioContainer}>
                    {colorArray.map((color) => (
                        <label
                            className={css.radio}
                            htmlFor={color.id}
                            key={color.id}
                        >
                            <input
                                className={css.radio__input}
                                type="radio"
                                name="color"
                                id={color.id}
                                value={color.value}
                            />
                            <div className={css.radio__label}>
                                {color.label}
                            </div>
                        </label>
                    ))}
                </fieldset>
                <div className={css.inputDataTitle}>Дата аренды</div>
                <div className={css.dateContainer}>
                    <div className={css.date}>
                        <div className={css.date__label}>С</div>
                        <DatePicker
                            {...settingsDatePicker}
                            selectsStart
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            maxDate={endDate}
                            filterTime={filterPassedTime}
                        />
                    </div>
                    <div className={css.date}>
                        <div className={css.date__label}>По</div>
                        <DatePicker
                            {...settingsDatePicker}
                            selectsEnd
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            minDate={startDate || new Date()}
                            filterTime={filterFutureTime}
                        />
                    </div>
                </div>
                <div className={css.inputDataTitle}>Тариф</div>
                <fieldset className={css.rateRadioContainer}>
                    {rateArray.map((rate) => (
                        <label
                            className={`${css.radio} ${css.rateRadio}`}
                            htmlFor={rate.id}
                            key={rate.id}
                        >
                            <input
                                className={css.radio__input}
                                type="radio"
                                name="rate"
                                id={rate.id}
                                value={rate.value}
                            />
                            <div className={css.radio__label}>{rate.label}</div>
                        </label>
                    ))}
                </fieldset>
                <div className={css.inputDataTitle}>Доп услуги</div>
                <div className={css.checkboxContainer}>
                    {additionalServicesArray.map((services) => (
                        <label
                            className={`${css.checkbox}`}
                            htmlFor={services.id}
                            key={services.id}
                        >
                            <input
                                className={css.checkbox__input}
                                type="checkbox"
                                name="services"
                                id={services.id}
                                value={services.value}
                            />
                            <div className={css.checkbox__label}>
                                {services.label}
                            </div>
                        </label>
                    ))}
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/total"
                    linkText="Итого"
                    city="Ульяновск"
                    cityPoint="Нариманова 42"
                    carModel="Hyndai, i30 N"
                    carColor="Голубой"
                    dateStart="1111"
                    dateEnd="2222"
                    selectedRate="На сутки"
                    isFullTank
                    price="16 000"
                />
            </div>
        </div>
    );
}

export default More;
