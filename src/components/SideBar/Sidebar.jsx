import React, { useState } from 'react';
import css from './SideBar.module.scss';

const Sidebar = () => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(!isShow);
        let back = document.querySelector('body');
        back.classList.toggle('lock');
    }

    return (
        <menu className={css.menu}>
            <button className={!isShow
                ? (`${css.nav_burger}`)
                : (`${css.nav_burger} ${css.menu_button__active}`)}
                onClick={handleClick}>
                <span></span>
            </button>
            <div>
                =
            </div>
        </menu>
    )
}

export default Sidebar;