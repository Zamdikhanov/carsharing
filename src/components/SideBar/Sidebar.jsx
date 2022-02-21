import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './SideBar.module.scss';
import { linksArray, socialArray } from './constants';


const Sidebar = () => {
    const [isShow, setIsShow] = useState(false);
    const [isRu, setIsRu] = useState(true);

    const handleClick = () => {
        setIsShow(!isShow);
        let back = document.querySelector('body');
        back.classList.toggle('lock');
    }
    const handleLangClick = () => {
        setIsRu(!isRu);
    }
    
    return (
        <menu className={css.menu}>
            <button className={`${css.nav_burger} ${!isShow ? css.menu_button__active : ''}`}
                onClick={handleClick}>
                <span></span>
            </button>
            <button className={`${css.buttonLang} 
            ${!isRu ? css.buttonLang_ru : css.buttonLang_en} 
            ${!isShow ? css.mediaButtonShow : ''}`}
                onClick={handleLangClick}>
            </button>
            <nav className={`${css.menu__nav} ${!isShow ? css.menu__nav__active : ''}`}>
                <div className={css.nav__contentBlock}>
                    <div className={css.contentBlock__box}>
                        <ul className={css.nav__list}>
                            {linksArray.map((linkName, index) => {
                                return (
                                    <li className={css.nav__listItem} key={index}>
                                        <Link className={css.nav__link} to='/'>
                                            {linkName}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={css.social__list}>
                            {socialArray.map(social => {
                            return (
                                <a className={css.social__listItem}
                                    key={social.id}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    {social.renderSvg()}
                                </a>)
                            })}
                        </div>
                    </div>
                </div>
                <div className={css.nav__transparentBlock}>

                </div>
            </nav >
        </menu >
    )
}

export default Sidebar;