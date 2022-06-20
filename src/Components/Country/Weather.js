import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(undefined)

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.name.common}&aqi=no`
      )
      .then(response => setCountryWeather(response.data))
  }, [country.name.common])
  console.log(countryWeather)

  if (countryWeather === undefined) {
    return <div>Fetching data...</div>
  } else
    return (
      <div className='weather__container'>
        <h1>Weather in {country.capital}:</h1>
        <div>
          It's {countryWeather.current.condition.text.toLocaleLowerCase()}.
        </div>
        <p>
          <img className='weather__logo'
            width='100px'
            src={countryWeather.current.condition.icon}
            alt={country.name.capital}
          />
        </p>
        <div>Todays temperature: {countryWeather.current.temp_c} °C</div>
        <div>Humidity is {countryWeather.current.humidity}%</div>
      </div>
    )
}

export default Weather
