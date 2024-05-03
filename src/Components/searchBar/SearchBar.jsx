import "./searchBar.css"
import { useState } from 'react';

const SearchBar = ({studentData, handleSearchInput}) => {

    function handleSearchChange(e){
        handleSearchInput(e.target.value);
    }

    return (
        <div className="search">
        <form>
                <input type="search" className="search-input" onChange={handleSearchChange} placeholder="Search Users"/>
                <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
        </form>
        </div>
    )
  }
  
  export default SearchBar