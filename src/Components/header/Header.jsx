import "./header.css"
import SearchBar from "../searchBar/SearchBar";
import FilterAndSearch from "../filterAndSearch/FilterAndSearch";

const Header = ({studentData, semesterOptions, formatSemester, handleFilterSelect, handleSearchInput}) => {
    return (
        <div className="header">

        <FilterAndSearch
        studentData={studentData}
        semesterOptions={semesterOptions}
        formatSemester={formatSemester}
        handleFilterSelect={handleFilterSelect}
        handleSearchInput={ handleSearchInput}
        />

        <div className="welcome-msg">
            <strong>Welcome Back</strong>
            <div className="circle"></div>
        </div>

        </div>
    )
  }
  
  export default Header;