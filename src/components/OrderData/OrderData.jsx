import { NavLink } from 'react-router-dom';
import css from './OrderData.module.scss';

function OrderData() {
    return (
        <div className={css.container}>
            <div className={css.title}>
                <h4 className={css.titleText}>Ваш заказ:</h4>
            </div>
            <ul className={css.dataList}>
                <li className={css.dataList__item}>
                    <div className={css.item__name}>Пункт выдачи</div>
                    <div className={css.item__dots}>
                        <span />
                    </div>
                    <div className={css.item__value}>
                        Ульяновск, Нариманова 42
                    </div>
                </li>
                <li className={css.dataList__item}>
                    <div className={css.item__name}>Пункт</div>
                    <div className={css.item__dots}>
                        <span />
                    </div>
                    <div className={css.item__value}>
                        Ульяновск, Нариманова 42
                    </div>
                </li>
            </ul>
            <div className={css.price}>Цена: от 8 000 до 12 000 ₽</div>
            <NavLink className={css.button} to="#">
                Выбрать модель
            </NavLink>
        </div>
    );
}

export default OrderData;
