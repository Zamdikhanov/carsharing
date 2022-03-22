import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './More.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import Preloader from '../../../components/Preloader/Preloader';
import {
    getRates,
    setColor,
    setMoreEndDate,
    setMoreStartDate,
    setRate,
    setServices,
} from '../../../store/moreSlice';
import getFormattedInterval from '../../../components/helpers/FormattedInterval';
import { setOrderDateInterval, setOrderPrice } from '../../../store/orderSlice';
import priceCalc from '../../../components/helpers/priceCalc';
import { setStepTotalIsShow } from '../../../store/stepDisableSlice';

registerLocale('ru', ru);

function More() {
    const dispatch = useDispatch();
    const {
        isFetching,
        rates,
        selectedColor,
        selectedRate,
        additionalServices,
        selectedStartDate,
        selectedEndDate,
    } = useSelector((state) => state.more);
    const { carModel } = useSelector((state) => state.order.order);

    const [colors] = useState(['Любой', ...carModel.colors]);
    const [startDate, setStartDate] = useState(
        selectedStartDate ? new Date(selectedStartDate) : null,
    );
    const [endDate, setEndDate] = useState(
        selectedEndDate ? new Date(selectedEndDate) : null,
    );

    useEffect(() => {
        if (rates.length < 2 && rates[0].id === null) dispatch(getRates());
        dispatch(setColor(selectedColor || 'Любой'));
        dispatch(setRate(selectedRate.id || rates[0]));
        setStartDate(selectedStartDate ? new Date(selectedStartDate) : null);
        setEndDate(selectedEndDate ? new Date(selectedEndDate) : null);
    }, []);

    useEffect(() => {
        let interval;
        if (startDate && endDate) {
            interval = getFormattedInterval(
                endDate.getTime() - startDate.getTime(),
            );
            dispatch(setOrderDateInterval(interval));
            dispatch(setMoreStartDate(startDate.getTime()));
            dispatch(setMoreEndDate(endDate.getTime()));
        }
    }, [startDate, endDate]);

    useEffect(() => {
        if (startDate && endDate) {
            const price = priceCalc(
                startDate.getTime(),
                endDate.getTime(),
                selectedRate,
                carModel,
                additionalServices,
            );
            dispatch(setOrderPrice(price));
            dispatch(setStepTotalIsShow(true));
        } else {
            dispatch(setOrderPrice(0));
            dispatch(setStepTotalIsShow(false));
        }
    }, [selectedRate, startDate, endDate, additionalServices]);

    const settingsDatePicker = {
        className: css.dateInput,
        clearButtonClassName: css.clearButton,
        placeholderText: 'Введите дату и время',
        dateFormat: 'dd.MM.yyyy HH:mm ',
        locale: 'ru',
        timeCaption: 'Время',
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
                    {colors.map((color) => (
                        <label
                            className={css.radio}
                            htmlFor={color}
                            key={color}
                        >
                            <input
                                className={css.radio__input}
                                type="radio"
                                name="color"
                                id={color}
                                value={color}
                                checked={color === selectedColor}
                                onChange={() => dispatch(setColor(color))}
                            />
                            <div className={css.radio__label}>{color}</div>
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
                {isFetching ? (
                    <Preloader />
                ) : (
                    <fieldset className={css.rateRadioContainer}>
                        {rates
                            .filter(
                                (rate) =>
                                    rate?.rateTypeId?.name !== null &&
                                    rate?.rateTypeId?.name !== undefined,
                            )
                            .map((rate) => (
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
                                        value={rate.id}
                                        checked={selectedRate.id === rate.id}
                                        onChange={() => dispatch(setRate(rate))}
                                    />
                                    <div className={css.radio__label}>
                                        {`${rate.rateTypeId.name}, ${rate.price}  ₽/${rate.rateTypeId.unit}`}
                                    </div>
                                </label>
                            ))}
                    </fieldset>
                )}
                <div className={css.inputDataTitle}>Доп услуги</div>
                <div className={css.checkboxContainer}>
                    {additionalServices.map((service, index) => (
                        <label
                            className={`${css.checkbox}`}
                            htmlFor={service.id}
                            key={service.id}
                        >
                            <input
                                className={css.checkbox__input}
                                type="checkbox"
                                name="services"
                                id={service.id}
                                checked={service.value}
                                onChange={() => dispatch(setServices(index))}
                            />
                            <div className={css.checkbox__label}>
                                {`${service.name}, ${service.price}р`}
                            </div>
                        </label>
                    ))}
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/total"
                    linkText="Итого"
                    nextStep="total"
                />
            </div>
        </div>
    );
}

export default More;
