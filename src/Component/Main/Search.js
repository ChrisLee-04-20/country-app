import SearchBar from "./SearchBar";
import Filter from "./Filter";

const Search = ({handleSearchInput, handleFilterByRegion, allRegion}) => {

    return (
            <div style={{display:"flex", justifyContent:"space-between", padding:"1rem 3rem"}}>
                <SearchBar handleSearchInput={handleSearchInput} />
                <Filter handleFilterByRegion={handleFilterByRegion} allRegion={allRegion} />
            </div>
    );

}

export default Search;