import { NavLink } from 'react-router-dom';
import ListString from './ListString';
import css from './OrderData.module.scss';

function OrderData(props) {
    const {
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
        cancel = false,
        showConfirmation = null,
    } = props;

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
                    {city && cityPoint && (
                        <ListString
                            title="Пункт выдачи"
                            data={`${city}, ${cityPoint}`}
                        />
                    )}
                    {carModel && <ListString title="Модель" data={carModel} />}
                    {carColor && <ListString title="Цвет" data={carColor} />}
                    {dateStart && dateEnd && (
                        <ListString
                            title="Длительность аренды"
                            data={getInterval(dateStart, dateEnd, selectedRate)}
                        />
                    )}
                    {selectedRate && (
                        <ListString title="Тариф" data={selectedRate} />
                    )}
                    {isFullTank && <ListString title="Полный бак" data="Да" />}
                    {isChildChair && (
                        <ListString title="Детское кресло" data="Да" />
                    )}
                    {isRightHandDrive && (
                        <ListString title="Правый руль" data="Да" />
                    )}
                </ul>
                <div className={css.price}>
                    Цена:
                    {price ? `${price} ₽` : `от ${priceMin} до ${priceMax} ₽`}
                </div>
            </div>
            {!showConfirmation ? (
                <NavLink
                    className={cancel ? css.cancelButton : css.button}
                    to={linkHref}
                >
                    {linkText}
                </NavLink>
            ) : (
                <button
                    className={cancel ? css.cancelButton : css.button}
                    type="button"
                    onClick={() => {
                        showConfirmation(true);
                    }}
                >
                    {linkText}
                </button>
            )}
        </div>
    );
}

export default OrderData;
