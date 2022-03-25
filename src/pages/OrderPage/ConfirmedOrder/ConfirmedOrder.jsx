import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/SideBar/Sidebar';
import { getOrderById } from '../../../store/orderSlice';
import Total from '../Total/Total';
import css from './ConfirmedOrder.module.scss';

function ConfirmedOrder() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderById(id));
    }, []);

    return (
        <div className={css.orderContainer}>
            <div className={css.orderContainer__sideBarBlock}>
                <Sidebar />
            </div>
            <main className={css.orderContainer__mainBlock}>
                <div className={css.mainBlock__wrapper}>
                    <div className={css.mainBlock__header}>
                        <Header />
                    </div>
                </div>
                <div className={css.mainBlock__breadCrumbs}>
                    <div className={css.mainBlock__wrapper}>
                        <div className={css.orderNumber}>Заказ номер {id}</div>
                    </div>
                </div>
                <div className={`${css.mainBlock__content} ${css.heightMax}`}>
                    <div
                        className={`${css.mainBlock__wrapper} ${css.heightMax}`}
                    >
                        <Total isConfirmedOrder />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ConfirmedOrder;
