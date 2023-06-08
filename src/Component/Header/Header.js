import ChangeThemeButton from "./ChangeThemeButton";
import "../../index.css";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../App.js"

const Header = ({handleChangeTheme}) => {
    const darkMode = useContext(DarkModeContext);

    return(
        <>
            <header className={darkMode} >
                <h1>Where in the world?</h1>
                <ChangeThemeButton handleChangeTheme={handleChangeTheme} />
            </header>
            <Outlet />
        </>
    );
}

export default Header;