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
    isFullTank = false,
    isChildChair = false,
    isRightHandDrive = false,
    priceMin = 0,
    priceMax = 0,
    price = 0,
    cansel = false,
}) {
    function getInterval() {
        return '1д2ч';
    }

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
                                {getInterval(dateStart, dateEnd, selectedRate)}
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
                <div className={css.price}>
                    Цена:
                    {price ? `${price} ₽` : `от ${priceMin} до ${priceMax} ₽`}
                </div>
            </div>
            <NavLink
                className={cansel ? css.canselButton : css.button}
                to={linkHref}
            >
                {linkText}
            </NavLink>
        </div>
    );
}

export default OrderData;
