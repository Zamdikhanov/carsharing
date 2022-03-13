/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable consistent-return */
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import css from './YandexMap.module.scss';
import mapMark from '../../assets/icons/map-mark.svg';

function YandexMap() {
    const API_KEY = process.env.REACT_APP_YANDEX_API_KEY;

    const selectedCity = useSelector(state => state.location.selectedCity);
    const availablePointsInSelectedCity = useSelector(state => state.location.availablePointsInSelectedCity);
    const selectedPoint = useSelector(state => state.location.selectedPoint);

    const map = useRef(null);

    const [ymap, setYmap] = useState(null);
    const [zoom, setZoom] = useState(8);
    const [center, setCenter] = useState([54.314387, 48.402588]);

    const mapState = useMemo(
        () => ({ center, zoom }),
        [zoom, center],
    );

    const [coordinates, setCoordinates] = useState(null);

    const getCoordinates = async (address) => {
        if (ymap) {
            const myGeocoder = await ymap.geocode(address);
            const firstGeoObject = myGeocoder.geoObjects.get(0);
            return firstGeoObject.geometry.getCoordinates();
        }
    };

    const changeMapCenter = async (address, isCity = false) => {
        if (isCity) { setZoom(10) } else { setZoom(16) };
        const coords = await getCoordinates(address);
        setCenter(coords);
    };

    const getPoints = async (points) => {
        const newCoordinates = [];
        for (const item of points) {
            const newCoordinate = await getCoordinates(`${selectedCity}, ${item.address}`);
            newCoordinates.push({ newCoordinate, point: item });
        }
        setCoordinates(newCoordinates);
    };

    useEffect(() => {
        if (!selectedPoint && selectedCity) { changeMapCenter(selectedCity, true) };
        if (selectedPoint) { changeMapCenter(`${selectedCity}, ${selectedPoint}`) };
    }, [selectedPoint]);

    useEffect(() => {
        if (availablePointsInSelectedCity) { getPoints(availablePointsInSelectedCity) };
        if (selectedCity) { changeMapCenter(selectedCity, true) };
    }, [availablePointsInSelectedCity]);

    const handleClick = (e) => {
        const placemarkCoords = e.get('coords');
        if (map.current) {
            map.current.setCenter(placemarkCoords);
        }
    };

    return (
        <YMaps query={{
            apikey: API_KEY,
            ns: 'use-load-option',
            load: 'geocode'
        }}>
            <div className={css.map}>
                <Map
                    width="100%"
                    height="100%"
                    state={mapState}
                    onLoad={(ymaps) => setYmap(ymaps)}
                    instanceRef={map}
                >
                    {coordinates && coordinates?.map((coordinate) => (
                        <Placemark
                            geometry={coordinate.newCoordinate}
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
