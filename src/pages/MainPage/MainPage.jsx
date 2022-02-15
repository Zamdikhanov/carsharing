import react from "react";
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
                        
                    </div>
                    <div className={css.mainBlock_heroBlock}>
                    Каршеринг
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