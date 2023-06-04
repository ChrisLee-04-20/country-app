import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Country = ({darkMode}) => {
    
    const [isRender, setIsRender] = useState(false);
    const location = useLocation();
    const [country, setCountry] = useState([]); 
    const [renderContent, setRenderContent] = useState("");

    const renderCountryContent = () => {
        setRenderContent(
            <div className={darkMode} >
                <Link to="/">
                    Back
                </Link>
                <img src={country.flag} />
                <h2>{country.name}</h2>
                <div>
                    <p>Native Name: {country.nativeNmae}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Sub Region: {country.subregion}</p>
                    <p>Capital: {country.capital}</p>
                </div>

                <div>
                    <p>Top Level Domain: {country.topLevelDomain}</p>
                    {country.currencies && <p>Currencies: {country.currencies[0].name}</p>}
                    <p>
                        languages: {country.languages && country.languages.map((data) => data.name + " ")}
                    </p>
                </div>

                <div>
                    <h3>Border Countries</h3>
                    {country.borders && country.borders.map((data) => <button key={data}>{data}</button>)}
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (location.state.country) {
            setIsRender(true);
            setCountry(location.state.country.country);   
            renderCountryContent();
        }
    }, [country])

    return (
        <>
            {isRender ? renderContent : <h1>Cannot get the data!</h1>}
        </>
    )

}

export default Country;
