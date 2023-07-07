import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { DarkModeContext } from "../../../App.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Country = () => {

    const [isRender, setIsRender] = useState(false);
    const location = useLocation();
    const [country, setCountry] = useState([]);
    const [renderContent, setRenderContent] = useState("");
    const darkMode = useContext(DarkModeContext);

    const renderCountryContent = () => {
        setRenderContent(
            <div className={"country-container " + darkMode} >
                <Link to="/" className={"home-button " + darkMode}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Back</p>
                </Link>
                <div className={"country-detail-card " + darkMode}>
                    <img className="country-detail-flag" src={country.flag} />
                    <div className={"country-detail-card-body " + darkMode}>
                        <h2>{country.name}</h2>
                        <div className={"country-geog-info " + darkMode}>
                            <p><span className="bold">Native Name:</span> {country.nativeName}</p>
                            <p><span className="bold">Population: </span>{country.population}</p>
                            <p><span className="bold">Region: </span>{country.region}</p>
                            <p><span className="bold">Sub Region: </span>{country.subregion}</p>
                            <p><span className="bold">Capital: </span>{country.capital}</p>
                        </div>

                        <div className={"country-culture-info " + darkMode}>
                            <p><span className="bold">Top Level Domain: </span>{country.topLevelDomain}</p>
                            {country.currencies && <p><span className="bold">Currencies: </span>{country.currencies[0].name}</p>}
                            <p>
                                <span className="bold">Languages: </span>{country.languages && country.languages.map((data) => data.name + " ")}
                            </p>
                        </div>

                        <div className={"country-border-info " + darkMode}>
                            <h3>Border Countries</h3>
                            <div className={"border-countries " + darkMode}>
                                {country.borders && country.borders.map((data) => <button className={"border-country-btn " + darkMode} key={data}>{data}</button>)}
                            </div>
                        </div>
                    </div>
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
