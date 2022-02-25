import { useState } from 'react';
import css from './UserLocation.module.scss';
// import InputSearch from '../../../components/InputSearch/InputSearch';
import OrderData from '../../../components/OrderData/OrderData';

function UserLocation() {
    const [searchText, setSearchText] = useState('');
    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className={css.contentBlock}>
            <div className={css.contentBlock__currentData}>
                <div className={css.container}>
                    <label className={css.search} htmlFor="city">
                        <div>Город</div>
                        <input
                            className={css.search_input}
                            type="text"
                            id="city"
                            name="city"
                            value={searchText}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {/* <UserLocation /> */}
            </div>
            <div className={css.contentBlock__allOrderData}>
                <OrderData />
            </div>
        </div>
    );
}

export default UserLocation;
