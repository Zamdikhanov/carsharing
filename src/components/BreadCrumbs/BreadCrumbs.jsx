import { NavLink } from 'react-router-dom';
import css from './BreadCrumbs.module.scss';
import linksArray from './constants';
import { ReactComponent as SvgTriangle } from '../../assets/icons/triangle.svg';

function BreadCrumbs() {
    return (
        <nav className={css.container}>
            <ul className={css.linksList}>
                {linksArray.map((link) => (
                    <li className={css.linksList__item} key={link.linkText}>
                        <NavLink
                            className={(navLink) => (`${css.item__link} ${navLink.isActive ? css.item__link_active : ''}`)}
                            to={link.linkUrl}
                        >
                            <SvgTriangle className={css.item__svg} />
                            {link.linkText}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default BreadCrumbs;
