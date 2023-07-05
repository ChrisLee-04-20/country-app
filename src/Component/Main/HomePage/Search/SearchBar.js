import { useContext } from "react";
import { DarkModeContext } from "../../../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({handleSearchInput }) => {
    const darkMode = useContext(DarkModeContext);

    return(
        <div className={"search-bar-container " + darkMode}>
            <FontAwesomeIcon icon={faSearch} className={"search-icon " + darkMode}/>
            <input className={"search-bar " + darkMode } type="search" 
                placeholder="Search for a country..."
                onChange={handleSearchInput}             
            />
        </div>
    );
}

export default SearchBar;