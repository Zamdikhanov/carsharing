import css from './OrderData.module.scss';

function ListString(props) {
    const { title, data } = props;
    return (
        <li className={css.dataList__item}>
            <div className={css.item__name}>{title}</div>
            <div className={css.item__dots}>
                <span />
            </div>
            <div className={css.item__value}>{data}</div>
        </li>
    );
}

export default ListString;
