import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SvgMapPosition } from '../../assets/icons/map-postion.svg';
import css from './Header.module.scss';

const Header = () => {
    return (
        <menu className={css.header}>
            <NavLink className={css.header__logo} to='/' >
                <h3 className={css.logo__title}>
                    Need for drive
                </h3>
            </NavLink>
            <NavLink className={css.header__location} to='#'>
                <SvgMapPosition className={css.location__svg} />
                <h3 className={css.location__name}>
                    Ульяновск
                </h3>
            </NavLink>
        </menu>
    )
}

export default Header;