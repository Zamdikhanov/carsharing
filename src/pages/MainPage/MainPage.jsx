import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import css from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={css.mainContainer}>
            <div className={css.mainContainer__sideBarBlock}>
                <Sidebar />
            </div>
            <main className={css.mainContainer__content}>
                <div className={css.content__mainBlock}>
                    <div className={css.mainBlock_header}>
                        <Header />
                    </div>
                    <div className={css.mainBlock_heroBlock}>
                        <h2 className={css.heroBlock__caption}>
                            Каршеринг
                        </h2>
                        <h2 className={css.heroBlock__title}>
                            Need for drive
                        </h2>
                        <div className={css.heroBlock__descrption}>
                            Поминутная аренда авто твоего города
                        </div>
                        <NavLink className={css.heroBlock__button} to='#'>
                            Забронировать
                        </NavLink>
                    </div>
                    <div className={css.mainBlock_footer}>

                    </div>
                </div>
                <div className={css.content__sliderBlock}>
                    Слайдер
                </div>
            </main>
        </div>
    )
}

export default MainPage;