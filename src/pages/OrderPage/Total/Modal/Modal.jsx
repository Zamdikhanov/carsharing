import { NavLink } from 'react-router-dom';
import css from './Modal.module.scss';

function Modal({ show }) {
    return (
        <div className={css.container}>
            <div className={css.contentBlock}>
                <div className={css.title}>Подтвердить заказ</div>
                <div className={css.buttonBlock}>
                    <NavLink className={css.buttonConfirm} to='/confirmed-order' >Подтвердить </NavLink>
                    <button className={css.buttonCancel} type='button' onClick={() => show(false)} >Вернуться </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;