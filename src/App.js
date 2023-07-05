import React, {createContext, useState, useEffect} from "react";
import Header from "./Component/Header/Header";
import Countries from "./Component/Main/HomePage/Countries";
import Country from "./Component/Main/CountryDetail/Country";
import "./index.css";
import useFetch from "./useHook/useFetch";
import {Routes, Route} from "react-router-dom";

export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(""); 
  const URL = "https://restcountries.com/v2/all";           //"https://restcountries.com/v3.1/all";
  const {data: countries, isPending, error} = useFetch(URL);

  const handleChangeTheme = () => {
    if (darkMode === "") {
      setDarkMode("dark-theme");
    } else {
      setDarkMode("");
    }
  }

  return (
    <DarkModeContext.Provider value={darkMode}>
      <div className="App">
            <Routes>
              <Route path="/" element={<Header handleChangeTheme={handleChangeTheme} />}>
                <Route index element={<Countries countries={countries} error={error} />} />
                <Route path="/country/:country" element={<Country />} />  
                <Route path="/*" element={<h1>ERROR PAGE</h1>}  />
              </Route>  
            </Routes>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;