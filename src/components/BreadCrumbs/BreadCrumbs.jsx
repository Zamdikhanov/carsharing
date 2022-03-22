import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './BreadCrumbs.module.scss';
import linksArray from './constants';
import { ReactComponent as SvgTriangle } from '../../assets/icons/triangle.svg';

function BreadCrumbs() {
    const step = useSelector((state) => state.step);

    const handleClick = (e, isShow) => {
        if (!isShow) e.preventDefault();
    };

    return (
        <nav className={css.container}>
            <ul className={css.linksList}>
                {linksArray.map((link) => (
                    <li className={css.linksList__item} key={link.linkText}>
                        <NavLink
                            className={(navLink) =>
                                `${css.item__link} ${
                                    navLink.isActive && css.item__link_active
                                } ${
                                    !step[link.linkUrl].isShow &&
                                    css.item__link_disable
                                }`
                            }
                            to={link.linkUrl}
                            onClick={(e) =>
                                handleClick(e, step[link.linkUrl].isShow)
                            }
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
