import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"

const getWeather = (capital) => {
    const request = axios.get(`${baseUrl}?q=${capital}&units=metric&appid=${apikey}`)
    return request.then(response => response.data)
}

export default {getWeather}