import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import css from './Total.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import defaultCarImage from '../../../assets/images/order-models/car-stub-picture.png';
import Modal from './Modal/Modal';
import formatDate from '../../../components/helpers/formatDate';

function Total() {
    const { carModel, dateStart, isFullTank, isChildChair, isRightHandDrive } =
        useSelector((state) => state.order.order);

    const [isShow, setIsShow] = useState(false);
    const [formatedDateStart, setFormatedDateStart] = useState();

    const orderData = {
        linkHref: '/order/total',
        linkText: 'Заказать',
        showConfirmation: setIsShow,
    };

    useEffect(() => {
        setFormatedDateStart(formatDate(dateStart));
    }, []);

    useEffect(() => {
        setFormatedDateStart(formatDate(dateStart));
    }, [dateStart]);

    return (
        <div className={css.contentBlock}>
            {isShow && <Modal show={setIsShow} />}
            <div className={css.contentBlock__currentData}>
                <div className={css.currentData__inner}>
                    <div className={css.carDescription}>
                        <div className={css.carModel}>{carModel.name}</div>
                        {carModel.number && (
                            <div className={css.carNumber}>
                                {carModel.number}
                            </div>
                        )}
                        {isFullTank && (
                            <div className={css.info}>
                                <span className={css.info__title}>Топливо</span>{' '}
                                100%
                            </div>
                        )}
                        {isChildChair && (
                            <div className={css.info}>
                                <span className={css.info__title}>
                                    Детское кресло
                                </span>{' '}
                                включено
                            </div>
                        )}
                        {isRightHandDrive && (
                            <div className={css.info}>
                                <span className={css.info__title}>
                                    Правый руль
                                </span>{' '}
                                есть
                            </div>
                        )}
                        <div className={css.info}>
                            <span className={css.info__title}>Доступна с</span>{' '}
                            {formatedDateStart}
                        </div>
                    </div>
                    <div className={css.carImageBlock}>
                        <img
                            className={css.carImage}
                            src={carModel?.thumbnail?.path || defaultCarImage}
                            alt={carModel.name}
                        />
                    </div>
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData {...orderData} />
            </div>
        </div>
    );
}

export default Total;
