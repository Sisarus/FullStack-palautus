import { useEffect, useState } from "react"
import weatherService from "../services/weatherData"

const imgUrl = 'https://openweathermap.org/img/wn/'

const Weather = ({capital}) => {
    const [capitalWeather, setCapitalWeather] = useState(null);

    useEffect(() => {
        weatherService
            .getWeather(capital)
            .then(res =>{
                console.log(res)
                setCapitalWeather(res)
            })
            .catch(error =>{
                console.log("NO data")
            })
    }, [capital])

    if(capitalWeather === null){
        return(
        <div>
            <h3>No weather data from {capital}</h3>
        </div>)
    }

    return(
        <div>
            <h3>Weather in {capital}</h3>
            <p>temperature {capitalWeather.main.temp} Celcius</p>
            <img src={`${imgUrl}${capitalWeather.weather[0].icon}.png`} alt={capitalWeather.weather[0].description}/>
            <p>wind {capitalWeather.wind.speed} m/s</p>
        </div>
    )

}

export default Weather