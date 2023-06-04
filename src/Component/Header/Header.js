import ChangeThemeButton from "./ChangeThemeButton";
import "../../index.css";
import { Outlet } from "react-router-dom";

const Header = ({handleChangeTheme, darkMode}) => {
    
    return(
        <>
            <header className={darkMode} >
                <h1>Where in the world?</h1>
                <ChangeThemeButton handleChangeTheme={handleChangeTheme} darkMode={darkMode} />
            </header>
            <Outlet />
        </>
    );
}

export default Header;