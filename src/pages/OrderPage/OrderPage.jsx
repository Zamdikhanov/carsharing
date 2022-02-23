import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Header from '../../components/Header/Header';
import OrderData from '../../components/OrderData/OrderData';
import Sidebar from '../../components/SideBar/Sidebar';
import UserLocation from '../../components/UserLocation/UserLocation';
import css from './OrderPage.module.scss';

function OrderPage() {
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
                        <BreadCrumbs />
                    </div>
                </div>
                <div className={css.mainBlock__content}>
                    <div
                        className={`${css.mainBlock__wrapper} ${css.heightMax}`}
                    >
                        <div className={css.contentBlock}>
                            <div className={css.contentBlock__currentData}>
                                <UserLocation />
                            </div>
                            <div className={css.contentBlock__allOrderData}>
                                <OrderData />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default OrderPage;
