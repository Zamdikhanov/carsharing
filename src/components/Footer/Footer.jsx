import React from 'react';
import css from './Footer.module.scss';

const Footer = () => {
    return (
        <menu className={css.footer}>
            <div className={css.footer__copy}>
                © 2016-2019 «Need for drive»
            </div>
            <a className={css.footer__phone} href="tel:+74952342244">
                8 (495) 234-22-44
            </a>
        </menu>
    )
}

export default Footer;