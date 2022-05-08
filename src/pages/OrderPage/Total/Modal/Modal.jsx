import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import orderAPI from '../../../../api/api';
import css from './Modal.module.scss';

function Modal({ show }) {
    const { fullReadyOrder } = useSelector((state) => state.order);
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const responce = await orderAPI.postOrder(fullReadyOrder);
        navigate(`/confirmed-order/${responce.id}`);
    };

    return (
        <div className={css.container}>
            <div className={css.contentBlock}>
                <div className={css.title}>Подтвердить заказ</div>
                <div className={css.buttonBlock}>
                    <NavLink
                        className={css.buttonConfirm}
                        to="/confirmed-order/"
                        onClick={(e) => handleClick(e)}
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
