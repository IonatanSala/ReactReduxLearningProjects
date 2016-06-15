import axios from 'axios'
import { FETCH_WEATHER } from './actionTypes';

const WEATHER_API_KEY = '78e149986aae4253cada426c950ac163';
const WEATHER_API_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export function fetchWeather(city) {
  const url = `${WEATHER_API_ENDPOINT}&q=${city},ie`
  const request = axios.get(url);
  console.log(request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
