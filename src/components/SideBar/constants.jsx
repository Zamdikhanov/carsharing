import css from './SideBar.module.scss';
import { ReactComponent as SvgTelegramm } from "../../assets/icons/telegram.svg";
import { ReactComponent as SvgFacebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as SvgInstagram } from "../../assets/icons/Instagram.svg";

export const linksArray = ['ПАРКОВКА', 'СТРАХОВКА', 'БЕНЗИН', 'ОБСЛУЖИВАНИЕ'];

export const socialArray = [
    {
        id: 1,
        href: 'https://telegram.org/',
        renderSvg: () => <SvgTelegramm className={css.social__svg} />,
    },
    {
        id: 2,
        href: 'https://www.facebook.com/',
        renderSvg: () => <SvgFacebook className={css.social__svg} />,
    },
    {
        id: 3,
        href: 'https://www.instagram.com/',
        renderSvg: () => <SvgInstagram className={css.social__svg} />,
    },
]