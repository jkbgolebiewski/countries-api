import './Country.css'
import Weather from './Weather'

const Country = ({ country }) => {
  console.log(country)

  return (
    <div className='country__container'>
      <div className='statistics__container'>
        <h1>{country.name.common}</h1>
        <div>Capital {country.capital}</div>
        <div>Population {country.population}</div>
        <h3>Languages</h3>
        {Object.values(country.languages).map(languages => (
          <ul key={languages}>{languages}</ul>
        ))}
        <p>
          <img 
            src={country.flags.svg}
            alt={country.name.common}
          />
        </p>
      </div>
      <Weather country={country}></Weather>
    </div>
  )
}

export default Country
