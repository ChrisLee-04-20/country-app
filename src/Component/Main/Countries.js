import React, { useState, useEffect, useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../App.js"

const Countries = ({countries, error}) => {
    const [searchInput, setSearchInput] = useState(""); 
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filteredRegion, setFilteredRegion] = useState("");
    const [allRegion, setAllRegion] = useState(null);
    const darkMode = useContext(DarkModeContext);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }

    const handleFilterByRegion = (e) => {
        setFilteredRegion(e.target.value);
    };

    const filterCountries = () => {

        if (filteredRegion === "") {
            setFilteredCountries(countries);
            return;
        }

        const filteredResult = countries.filter((country) => {
            if (country.region.toLowerCase() === filteredRegion.toLowerCase()) {    
                return country;
            }
        });

        setFilteredCountries(filteredResult);
    }

    const searchCountries = () => {
        if(searchInput === "" && filteredRegion === "") {                           //set default render all countries
            setFilteredCountries(countries);
            return;
        }
        
        const filterTarger = filteredRegion === "" ? countries : filteredCountries;

        const filteredResult = filterTarger.filter((country) => {                   //filter with the user input
            if (country.name.toLowerCase().includes(searchInput !== "" && searchInput.toLowerCase() )) {
                return country;
            }
        });

        if (filteredResult.length === 0 && filteredRegion === "" ) {                //check the use input have result or not and the 
            console.log("o1")
            setFilteredCountries(countries);
            return;
        }


        if (filteredResult.length === 0 && filteredRegion !== "")  {                //return the orginal filtered region countries if the cannot find the search country
            return;
        }

        if (filteredResult.length !== 0) {                                          //return the filteredResult
            setFilteredCountries(filteredResult);
            return;
        }
    }

    useEffect(() => {
        filterCountries();
        searchCountries();
    }, [searchInput, filteredRegion, countries]);

    useEffect(() => {
        const resultSet = new Set();
        if (countries) {
            countries.map((country) => {
                resultSet.add(country.region);
            })
            setAllRegion(resultSet);
        }
    }, [countries])

    return(
        <main className={darkMode}>  
            <Search 
                handleSearchInput={handleSearchInput} 
                handleFilterByRegion={handleFilterByRegion}
                allRegion={allRegion}
            />

            <section className="countries-container" >
                {!error && filteredCountries && filteredCountries.map((country) => {
                    const { numericCode, name, population, region, capital, flag } = country;
                    return (
                        <Link to={`country/${name}`} key={name} state={{ country: { country } }} >           {/* using the router useLocation to pass the current country object to the country.js */}
                            <article className={"country-card " + darkMode} key={numericCode}>
                                <img className="flag" src={flag} alt={name} />
                                <div className="card-body">
                                    <h3 className="card-title">{name}</h3>
                                    <h4>Population: {population}</h4>
                                    <h4>Region: {region}</h4>
                                    <h4>Capital: {capital}</h4>
                                </div>
                            </article>
                        </Link>
                    );
                })}
            </section>
        </main>
    )
}

export default Countries; 