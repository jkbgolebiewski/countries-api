import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import SearchFilter from './Components/SearchFilter/SearchFilter'
import Countries from './Components/Countries/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [displayedCountries, setDisplayedCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => console.error(`Cannot fetch data`))
  }, [])

  const handleFilterName = event => {
    let userInput = event.target.value.toLocaleLowerCase()
    let countriesCopy = [...countries] //gets executed ON EACH render
    let filteredCountries = countriesCopy.filter(myCountries =>
      myCountries.name.common.toLocaleLowerCase().includes(userInput)
    )
    setDisplayedCountries(filteredCountries) //render
  }

  const handleShowClick = country => {
    let copy = []
    copy.push(country)
    setDisplayedCountries(copy)
  }

  return (
    <div className='app__container'>
      <SearchFilter handleFilterName={handleFilterName} />
          <Countries
            displayedCountries={displayedCountries}
            handleShowClick={handleShowClick}
          />
    </div>
  )
}

export default App
