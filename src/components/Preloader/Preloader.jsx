import css from './Preloader.module.scss';
import loadingGif from '../../assets/images/common/loading.gif'


function Preloader() {
    return (
        <div className={css.container}>
            <div className={css.block}>
                <img src={loadingGif} alt='загрузка' />
                <div>загрузка данных</div>
            </div>
        </div>
    )
}

export default Preloader;