import axios from 'axios';

const API_KEY = '33b77dd5e4d07b1d75597e07cbdcba68';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}