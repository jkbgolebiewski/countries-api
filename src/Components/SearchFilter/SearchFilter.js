const SearchFilter = ({ handleFilterName }) => {
  return (
    <div>
      <h1>Find a country</h1>
      <h4>get country's statistics and capital's weather</h4>
      <input placeholder="Type country's name" onChange={handleFilterName} />
    </div>
  )
}

export default SearchFilter
