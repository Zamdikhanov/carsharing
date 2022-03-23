// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import orderAPI from '../../../../api/api';
import css from './Modal.module.scss';

function Modal({ show }) {
    // const {} = useSelector(state => state.order.order)

    const order = {
        orderStatusId: {
            name: 'Новые',
            id: '5e26a191099b810b946c5d89',
        },
        cityId: '5e26a191099b810b946c5d89',
        pointId: '5e26a191099b810b946c5d89',
        carId: '5e26a191099b810b946c5d89',
        color: 'string',
        dateFrom: 0,
        dateTo: 0,
        rateId: {
            name: 'Новые',
            id: '5e26a191099b810b946c5d89',
        },
        price: 0,
        isFullTank: true,
        isNeedChildChair: true,
        isRightWheel: true,
    };

    const handleClick = async () => {
        const responce = await orderAPI.postOrder(order);
        console.log(responce);
    };

    return (
        <div className={css.container}>
            <div className={css.contentBlock}>
                <div className={css.title}>Подтвердить заказ</div>
                <div className={css.buttonBlock}>
                    <NavLink
                        className={css.buttonConfirm}
                        to="/confirmed-order"
                        onClick={() => handleClick()}
                    >
                        Подтвердить{' '}
                    </NavLink>
                    <button
                        className={css.buttonCancel}
                        type="button"
                        onClick={() => show(false)}
                    >
                        Вернуться{' '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
