import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useRef } from 'react';
import css from './YandexMap.module.scss';

const coordinates = [
    [54.314334, 48.402458],
    [54.376343, 48.582955]
];

function YandexMap() {

    const map = useRef(null);

    const handleClick = (e) => {
        const placemarkCoords = e.get("coords");
        if (map.current) {
            map.current.setCenter(placemarkCoords);
        }
    };

    return (
        <YMaps>
            <div className={css.map}>
                <Map width="100%" height="100%" defaultState={{ center: [54.314334, 48.402458], zoom: 10, }} instanceRef={map} >
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} key={coordinate[0]} onClick={handleClick} />)}
                </Map>
            </div>
        </YMaps>
    )
};

export default YandexMap;