import { useState } from "react";
import coutriesService from "./servisces/coutries";
import ShowData from './components/ShowData.jsx'

const App =()=> {
  const [countries, setCountries] = useState([])
  const [lookCountry, setLookCountry] = useState('')
  const [message, setMessage] = useState(null)

  const handleCountryChange =(e)=>{
    setLookCountry(e.target.value)

     console.log(e.target.value.length,  " " , e.target.value !== 0)

    coutriesService
      .getAll()
      .then(responseCountries => {
        const foundCountries = responseCountries.filter(country => country.name.common.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        if (foundCountries.length === 0) {
          setMessage('Too low matches, specify another filter')
          setCountries([]);
        } else if(foundCountries.length < 11) {
          setMessage(null)
          setCountries(foundCountries);
        } else {
          setCountries([]);
          if(e.target.value.length === 0){
            setMessage(null)
          } else {
            setMessage('Too many matches, specify another filter')
          }
        }
      })
    }
  

  const handleShowSelectedCountry = (country) => {
    setCountries([country])
  }

  return (
    <div>
      <p>Find countries <input value={lookCountry} onChange={handleCountryChange}></input> </p>
      <ShowData countriesData={countries} handleShowSelectedCountry={handleShowSelectedCountry} message={message}/>
    </div>
  );
}

export default App;
