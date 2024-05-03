import "./filterSelect.css"

const FilterSelect = ({StudentData, semesterOptions, formatSemester, handleFilterSelect}) => {

        function handleFilterChange(e){
           handleFilterSelect(e.target.value);
        }
      
    return (
        <div className="filter-select">
        <form>
                <select name="filter" onChange={handleFilterChange} id="filter" defaultValue="default">
                    <option value="default">Filter Users</option>
                    {semesterOptions.map((semester, index) => {
                return <option key={index} value={index > 0 ? semester.join('') : semester.split(" ").join('')}>
                    {index > 0 ? formatSemester(semester) : semester}</option>
            })}

                </select>
        </form>
        </div>
    )
  }
  
  export default FilterSelect;