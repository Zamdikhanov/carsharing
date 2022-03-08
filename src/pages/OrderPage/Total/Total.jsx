import order from './constants';
import css from './Total.module.scss';
import OrderData from '../../../components/OrderData/OrderData';
import defaultCarImage from '../../../assets/images/order-models/car-stub-picture.png';

function Total() {
    const {
        carModel,
        carNumber,
        isFullTank,
        isChildChair,
        isRightHandDrive,
        dateStart,
        imgUrl,
    } = order;
    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.currentData__inner}>
                    <div className={css.carDescription}>
                        <div className={css.carModel}>{carModel}</div>
                        <div className={css.carNumber}>{carNumber}</div>
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
                            {dateStart}
                        </div>
                    </div>
                    <div className={css.carImageBlock}>
                        {imgUrl ? (
                            <img
                                className={css.carImage}
                                src={imgUrl}
                                alt={carModel}
                            />
                        ) : (
                            <img
                                className={css.carImage}
                                src={defaultCarImage}
                                alt={carModel}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData
                    linkHref="/order/total"
                    linkText="Заказать"
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

export default Total;
