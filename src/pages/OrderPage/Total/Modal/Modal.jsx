// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import orderAPI from '../../../../api/api';
import css from './Modal.module.scss';

function Modal({ show }) {
    // const {} = useSelector(state => state.order.order)

    const order = {
        orderStatusId: {
            id: '5e26a191099b810b946c5d89',
        },
        cityId: {
            id: '60d6e4d32aed9a0b9b84fa82'
        },
        pointId: { id: '6114630f2aed9a0b9b850806' },
        carId: { id: "600fe367ad015e0bb6997d5d" },
        color: 'string2',
        dateFrom: 0,
        dateTo: 0,
        rateId: {
            id: "60c614202aed9a0b9b84f543"
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
