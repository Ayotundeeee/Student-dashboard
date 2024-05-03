import "./listHeader.css"
import SortSelect from "../sortSelect/SortSelect";

const ListHeader = (prop) => {

    const filter = prop.currentFilter;
    const length = prop.studentData.length;

    return (
        <div className="profile-list__header">

            <div className="profile-list__header-group">
                <p>{filter === "AllStudents" || filter === "default" ? "All Students"
                    : prop.formatSemester(splitFilterValue(filter))} 
                <span>({length})</span></p>
            </div>
            
            <SortSelect 
            handleSortSelect={prop.handleSortSelect}
            />
        </div>    
    )
  }

  // helper function to split filter value
  const splitFilterValue = (value) => {
    return [value.substring(0, value.length - 4), value.substring(value.length - 4)]
  }
  
  export default ListHeader;