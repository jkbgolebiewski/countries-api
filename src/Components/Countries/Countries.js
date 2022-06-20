import Country from "../Country/Country";

const Countries = ({ displayedCountries, handleShowClick }) => {
    let length = displayedCountries.length;
    console.log("Countries length", length);
  
    if (length > 10 ) {
      return 'Too many matches, specify another filter.'
    } else if (length <= 10 && length > 1) {
      return (
        <div>
          {displayedCountries.map((country) => (
            <ul className="" key={country.name.common}>
              {country.name.common}
              <button type="button" onClick={() => handleShowClick(country)}>
                Show country
              </button>
            </ul>
          ))}
        </div>
      );
    } else if (length === 1) {
      let countryObj = displayedCountries[0];
      return <Country country={countryObj} />;
    } else {
      return <div>No matches found </div>;
    }
  };

  export default Countries;