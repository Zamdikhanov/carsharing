import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useRef } from 'react';
import css from './YandexMap.module.scss';
import mapMark from '../../assets/icons/map-mark.svg';

const coordinates = [
    [54.314387, 48.402588],
    [54.376395, 48.583124],
];

function YandexMap() {
    const map = useRef(null);

    const handleClick = (e) => {
        const placemarkCoords = e.get('coords');
        if (map.current) {
            map.current.setCenter(placemarkCoords);
        }
    };

    return (
        <YMaps>
            <div className={css.map}>
                <Map
                    width="100%"
                    height="100%"
                    defaultState={{ center: [54.314387, 48.402588], zoom: 10 }}
                    instanceRef={map}
                >
                    {coordinates.map((coordinate) => (
                        <Placemark
                            geometry={coordinate}
                            options={{
                                iconLayout: 'default#image',
                                iconImageSize: [18, 18],
                                iconImageHref: mapMark,
                                iconImageOffset: [-9, -9],
                            }}
                            key={coordinate[0]}
                            onClick={handleClick}
                        />
                    ))}
                </Map>
            </div>
        </YMaps>
    );
}

export default YandexMap;
