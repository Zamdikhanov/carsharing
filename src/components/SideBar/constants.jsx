import css from './SideBar.module.scss';
import { ReactComponent as SvgTelegramm } from '../../assets/icons/telegram.svg';
import { ReactComponent as SvgOdnoklassniki } from '../../assets/icons/odnoklassniki.svg';
import { ReactComponent as SvgVk } from '../../assets/icons/vk.svg';

export const linksArray = ['ПАРКОВКА', 'СТРАХОВКА', 'БЕНЗИН', 'ОБСЛУЖИВАНИЕ'];

export const socialArray = [
    {
        id: 1,
        href: 'https://telegram.org/',
        renderSvg: () => <SvgTelegramm className={css.social__svg} />,
    },
    {
        id: 4,
        href: 'https://ok.ru/',
        renderSvg: () => <SvgOdnoklassniki className={css.social__svg} />,
    },
    {
        id: 5,
        href: 'https://vk.com/',
        renderSvg: () => <SvgVk className={css.social__svg} />,
    },
];
