import Weather from "./Weather"

const ShowData =({countriesData, handleShowSelectedCountry, message}) => {
    if(message !== null && countriesData.length === 0){
        return (
            <div>
                <p>{message}</p>
            </div>
        )
    }
    if(message === null && countriesData.length === 0){
        return (
            <div>
            </div>
        )
    }

    if(countriesData.length === 1){
        // console.log(countriesData[0].languages)
        // Object.entries(countriesData[0].languages).map(([key, value]) =>  console.log(`${key}: ${value}`))
        return (
            <div>
                <h2>{countriesData[0].name.common}</h2>
                <p>capital {countriesData[0].capital}</p>
                <p>area {countriesData[0].area}</p>
                <h4>Languages:</h4>
                <ul>
                {
                    Object.entries(countriesData[0].languages).map(([key, value]) => {return(<li key={value}>{value}</li>)})
                }
                </ul>
                <img style={style} src={countriesData[0].flags.png} alt={countriesData[0].flags.alt}/>
                <Weather capital={countriesData[0].capital}/>
            </div>
        )
    }
    return (
        <div>
            {
                countriesData.map((country, id)=>
                <p key={id}>{country.name.common}<button onClick={()=>handleShowSelectedCountry(country)}>show</button></p>
                )
            }
        </div>
    )
}

export default ShowData

const style = {
    height: "200px"
}