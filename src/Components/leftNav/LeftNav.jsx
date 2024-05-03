import "./leftNav.css"
import SemesterList from "../semesterList/SemesterList"

const LeftNav = ({studentData, semesterOptions, currentFilter}) => {

    return (
        <div className="left-nav">
        <h2 className="nav-header">Pursuit</h2>
        <div className="semester-list">
            <SemesterList
                studentData={studentData}
                semesterOptions={semesterOptions}
                currentFilter={currentFilter}
            />
        </div>
        
        </div>
        
    )
  }
  
  export default LeftNav