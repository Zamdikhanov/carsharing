import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/SideBar/Sidebar';
// import UserLocation from './UserLocation/UserLocation';
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
                <div className={`${css.mainBlock__content} ${css.heightMax}`}>
                    <div
                        className={`${css.mainBlock__wrapper} ${css.heightMax}`}
                    >
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default OrderPage;
