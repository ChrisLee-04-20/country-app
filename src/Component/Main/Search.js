import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { useContext } from "react";
import { DarkModeContext } from "../../App";

const Search = ({handleSearchInput, handleFilterByRegion, allRegion }) => {
    const darkMode = useContext(DarkModeContext);

    return (
            <div className={"search " + darkMode}>
                <SearchBar handleSearchInput={handleSearchInput} />
                <Filter handleFilterByRegion={handleFilterByRegion} allRegion={allRegion} />
            </div>
    );

}

export default Search;