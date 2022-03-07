import { NavLink } from 'react-router-dom';
import css from './OrderData.module.scss';

function OrderData({
    linkHref,
    linkText,
    city = null,
    cityPoint = null,
    carModel = null,
    carColor = null,
    dateStart = null,
    dateEnd = null,
    selectedRate = null,
    isFullTank = null,
    isChildChair = null,
    isRightHandDrive = null,
}) {
    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <div className={css.title}>
                    <h4 className={css.titleText}>Ваш заказ:</h4>
                </div>
                <ul className={css.dataList}>
                    {city && cityPoint ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Пункт выдачи</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>
                                {city}, {cityPoint}
                            </div>
                        </li>
                    ) : null}
                    {carModel ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Модель</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>{carModel}</div>
                        </li>
                    ) : null}
                    {carColor ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Цвет</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>{carColor}</div>
                        </li>
                    ) : null}
                    {dateStart && dateEnd ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>
                                Длительность аренды
                            </div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>
                                {dateEnd - dateStart}
                            </div>
                        </li>
                    ) : null}
                    {selectedRate ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Тариф</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>
                                {selectedRate}
                            </div>
                        </li>
                    ) : null}
                    {isFullTank ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Полный бак</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>Да</div>
                        </li>
                    ) : null}
                    {isChildChair ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Детское кресло</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>Да</div>
                        </li>
                    ) : null}
                    {isRightHandDrive ? (
                        <li className={css.dataList__item}>
                            <div className={css.item__name}>Правый руль</div>
                            <div className={css.item__dots}>
                                <span />
                            </div>
                            <div className={css.item__value}>Да</div>
                        </li>
                    ) : null}
                </ul>
                <div className={css.price}>Цена: от 8 000 до 12 000 ₽</div>
            </div>
            <NavLink className={css.button} to={linkHref}>
                {linkText}
            </NavLink>
        </div>
    );
}

export default OrderData;
