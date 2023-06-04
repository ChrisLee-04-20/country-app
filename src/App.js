import React, {useState, useEffect} from "react";
import Header from "./Component/Header/Header";
import Countries from "./Component/Main/Countries";
import Country from "./Component/Main/CountryDetail/Country";
import "./index.css";
import useFetch from "./useHook/useFetch";
import {Routes, Route} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(""); 
  const URL = "https://restcountries.com/v2/all";           //"https://restcountries.com/v3.1/all";
  const {data: countries, isPending, error} = useFetch(URL);

  const handleChangeTheme = () => {
    if (darkMode == "") {
      setDarkMode("dark-theme");
    } else {
      setDarkMode("");
    }
  }

  useEffect(() => {

  }, [darkMode]);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Header handleChangeTheme={handleChangeTheme} darkMode={darkMode} />}>
            <Route index element={<Countries countries={countries} error={error} darkMode={darkMode} />} />
            <Route path="/country/:country" element={<Country />} darkMode={darkMode} />  
            <Route path="/*" element={<h1>ERROR PAGE</h1>} darkMode={darkMode} />
          </Route>  
        </Routes>
      </div>
  );
}

export default App;
