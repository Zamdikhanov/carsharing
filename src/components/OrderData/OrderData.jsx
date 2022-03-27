import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { canselOrder } from '../../store/orderSlice';
import ListString from './ListString';
import css from './OrderData.module.scss';

function OrderData(props) {
    const {
        linkHref,
        linkText,
        cancel = false,
        showConfirmation = null,
        nextStep = 'model',
    } = props;

    const dispatch = useDispatch();
    const step = useSelector((state) => state.step);

    const {
        city,
        cityPoint,
        carModel,
        carColor,
        dateInterval,
        selectedRate,
        isFullTank,
        isChildChair,
        isRightHandDrive,
        price,
    } = useSelector((state) => state.order.order);

    const handleClickLink = (e, isShow) => {
        if (!isShow) e.preventDefault();
    };

    const handleClickButton = (e, isShow) => {
        if (!isShow) {
            e.preventDefault();
        } else {
            showConfirmation(true);
        }
        if (cancel) dispatch(canselOrder());
    };

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
                            data={
                                <span>
                                    {city.name} <br /> {cityPoint.address}
                                </span>
                            }
                        />
                    )}
                    {carModel.id && (
                        <ListString title="Модель" data={carModel.name} />
                    )}
                    {carColor && <ListString title="Цвет" data={carColor} />}
                    {dateInterval && (
                        <ListString
                            title="Длительность аренды"
                            data={dateInterval}
                        />
                    )}
                    {selectedRate?.id && (
                        <ListString
                            title="Тариф"
                            data={selectedRate.rateTypeId.name}
                        />
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
                    {price
                        ? `${price} ₽`
                        : `от ${carModel.priceMin} до ${carModel.priceMax} ₽`}
                </div>
            </div>
            {showConfirmation ? (
                <button
                    className={cancel ? css.cancelButton : css.button}
                    type="button"
                    onClick={(e) => {
                        handleClickButton(e, step[nextStep].isShow);
                    }}
                >
                    {linkText}
                </button>
            ) : (
                <NavLink
                    className={`${cancel ? css.cancelButton : css.button} 
                    ${!step[nextStep].isShow && css.button_disable}
                    `}
                    to={linkHref}
                    onClick={(e) => {
                        handleClickLink(e, step[nextStep].isShow);
                    }}
                >
                    {linkText}
                </NavLink>
            )}
        </div>
    );
}

export default OrderData;
