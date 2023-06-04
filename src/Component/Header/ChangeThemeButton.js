import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";

const ChangeThemeButton = ({handleChangeTheme, darkMode}) => {

    return(
        <>
            <a className={"change-theme-btn " + darkMode} onClick={handleChangeTheme} >
                <FontAwesomeIcon icon={faMoon} className={"change-theme-btn " + darkMode} />
                <p>Dark mode</p>
            </a>
        </>
    )
}

export default ChangeThemeButton;