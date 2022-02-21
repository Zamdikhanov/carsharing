import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './SideBar.module.scss';
import { ReactComponent as SvgTelegramm } from './../../assets/icons/telegram.svg';
import { ReactComponent as SvgFacebook } from './../../assets/icons/facebook.svg';
import { ReactComponent as SvgInstagram } from './../../assets/icons/Instagram.svg';

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
    const linksArray = ['ПАРКОВКА', 'СТРАХОВКА', 'БЕНЗИН', 'ОБСЛУЖИВАНИЕ'];

    return (
        <menu className={css.menu}>
            <button className={!isShow
                ? (`${css.nav_burger}`)
                : (`${css.nav_burger} ${css.menu_button__active}`)}
                onClick={handleClick}>
                <span></span>
            </button>
            <button className={`${css.buttonLang} ${!isRu ? css.buttonLang_ru : css.buttonLang_en} ${!isShow ? css.mediaButtonShow : ''}`}
                onClick={handleLangClick}>
            </button>
            <nav className={!isShow
                ? (`${css.menu__nav}`)
                : (`${css.menu__nav} ${css.menu__nav__active}`)}>
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
                            <a className={css.social__listItem}
                                href='https://telegram.org/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <SvgTelegramm className={css.social__svg} />
                            </a>
                            <a className={css.social__listItem}
                                href='https://www.facebook.com/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <SvgFacebook className={css.social__svg} />
                            </a>
                            <a className={css.social__listItem}
                                href='https://www.instagram.com/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <SvgInstagram className={css.social__svg} />
                            </a>
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