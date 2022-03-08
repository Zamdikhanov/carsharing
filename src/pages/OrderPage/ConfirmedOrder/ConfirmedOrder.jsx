import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/SideBar/Sidebar';
import Total from '../Total/Total';
import css from './ConfirmedOrder.module.scss';

function ConfirmedOrder() {
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
                        <div className={css.orderNumber} >
                            Заказ номер RU58491823
                        </div>
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
