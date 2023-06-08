import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { DarkModeContext } from "../../../App.js"

const Country = () => {
    
    const [isRender, setIsRender] = useState(false);
    const location = useLocation();
    const [country, setCountry] = useState([]); 
    const [renderContent, setRenderContent] = useState("");
    const darkMode = useContext(DarkModeContext);

    const renderCountryContent = () => {
        setRenderContent(
            <div className={"country-container " + darkMode} >
                <Link to="/" className={darkMode}>
                    <a>Back</a>
                </Link>
                <img src={country.flag} />
                <h2>{country.name}</h2>
                <div>
                    <p>Native Name: {country.nativeName}</p>
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
    }, [country, darkMode])

    return (
        <>
            {isRender ? renderContent : <h1>Cannot get the data!</h1>}
        </>
    )

}

export default Country;
