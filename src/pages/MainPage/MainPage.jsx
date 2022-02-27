import { NavLink } from 'react-router-dom';
import Sidebar from '../../components/SideBar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import css from './MainPage.module.scss';

function MainPage() {
    return (
        <div className={css.mainContainer}>
            <div className={css.mainContainer__sideBarBlock}>
                <Sidebar />
            </div>
            <main className={css.mainContainer__content}>
                <div className={css.content__mainBlock}>
                    <div className={css.mainBlock__header}>
                        <Header />
                    </div>
                    <div className={css.mainBlock__heroBlock}>
                        <h2 className={css.heroBlock__caption}>Каршеринг</h2>
                        <h2 className={css.heroBlock__title}>Need for drive</h2>
                        <div className={css.heroBlock__descrption}>
                            Поминутная аренда авто твоего города
                        </div>
                        <NavLink
                            className={css.heroBlock__button}
                            to="/order/location"
                        >
                            Забронировать
                        </NavLink>
                    </div>
                    <div className={css.mainBlock__footer}>
                        <Footer />
                    </div>
                </div>
                <div className={css.content__sliderBlock}>
                    <Slider />
                </div>
            </main>
        </div>
    );
}

export default MainPage;
