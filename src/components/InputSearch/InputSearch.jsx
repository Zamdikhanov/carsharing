/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import css from './InputSearch.module.scss';

function InputSearch() {
    const [searchText, setSearchText] = useState('');
    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className={css.container}>
            <label className={css.search}>
                <span className={css.search_label}>Город</span>
                <input
                    className={css.search_input}
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

export default InputSearch;
