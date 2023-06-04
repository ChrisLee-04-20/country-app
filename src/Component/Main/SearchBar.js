const SearchBar = ({handleSearchInput}) => {

    return(
        <input type="search" 
            placeholder="Search for a country..."
            onChange={handleSearchInput}             
        />
    );
}

export default SearchBar;