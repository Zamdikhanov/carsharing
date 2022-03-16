/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable consistent-return */
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './YandexMap.module.scss';
import mapMark from '../../assets/icons/map-mark.svg';
import { setPoint } from '../../store/locationSlice';

function YandexMap() {
    const API_KEY = process.env.REACT_APP_YANDEX_API_KEY;
    const dispatch = useDispatch();

    const { selectedCity, availablePointsInSelectedCity, selectedPoint } = useSelector(state => state.location);

    const map = useRef(null);

    const [ymap, setYmap] = useState(null);
    const [zoom, setZoom] = useState(8);
    const [center, setCenter] = useState([54.314387, 48.402588]);

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
    }, [selectedPoint, selectedCity]);

    useEffect(() => {
        if (!selectedPoint && selectedCity) { changeMapCenter(selectedCity, true) };
        if (selectedPoint) { changeMapCenter(`${selectedCity}, ${selectedPoint}`) };
    }, []);

    useEffect(() => {
        if (availablePointsInSelectedCity) { getPoints(availablePointsInSelectedCity) };
        if (selectedCity) { changeMapCenter(selectedCity, true) };
    }, [availablePointsInSelectedCity]);

    const handleClick = (e, point) => {
        dispatch(setPoint(point));
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
                    state={{ center, zoom }}
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
                            onClick={(e) => { handleClick(e, coordinate.point.address) }}
                        />
                    ))}
                </Map>
            </div>
        </YMaps>
    );
}

export default YandexMap;
