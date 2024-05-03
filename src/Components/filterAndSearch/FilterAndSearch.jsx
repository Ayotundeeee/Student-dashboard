import FilterSelect from "../filterSelect/FilterSelect"
import SearchBar from "../searchBar/SearchBar"
import "./filterAndSearch.css"

const FilterAndSearch = ({studentData, formatSemester, semesterOptions, handleFilterSelect, handleSearchInput}) => {
    return (
        <div className="filter-search">
            <FilterSelect 
                studentData={studentData}
                semesterOptions={semesterOptions}
                formatSemester={formatSemester}
                handleFilterSelect={handleFilterSelect}
            />
            <SearchBar 
            studentData={studentData}
            handleSearchInput={handleSearchInput}
            />
        </div>
    )
  }
  
  export default FilterAndSearch