import "./profileList.css"
import react from 'react'
import { useState } from 'react'
import Card from "../card/Card"
import ListHeader from "../listHeader/ListHeader"
import Details from "../modal/Details"

const ProfileList = ({studentData, openDetails, formatSemester, currentFilter}) => {

    const [sortedStudents, setSortedStudents] = useState(studentData)
    const [sortValue, updateSortValue] = useState("default")

    // function for sorting student list.

    const handleSortSelect = (sortValue)=>{
        updateSortValue(sortValue);
        setSortedStudents(sortedList(sortValue));
    }

    const sortedList = (sortValue) => {
        

        if(sortValue === "default"){
            return studentData;
        }

        else {
            const sorted = studentData.sort((a, b) => {

                const aDate = new Date(a.dob);
                const bDate = new Date(b.dob);

                if(sortValue === "Ascending"){
                    return bDate - aDate;
                }

                if(sortValue === "Descending"){
                    return aDate - bDate
                }
            })
        
            return sorted;     
        }
    }

    return (

        <div className="profile-list">
            <ListHeader 
            studentData={studentData}
            formatSemester={formatSemester}
            currentFilter={currentFilter}
            currentSort={sortValue}
            handleSortSelect={handleSortSelect}
            />

            <div className="profile-list__students">
                {studentData.map(student => {
                return (
                    <Card
                        key={student.id}
                        student={student}
                        openDetails={openDetails}
                    />
                )
            })}
            </div> 
        </div>

    )
  }
  
  export default ProfileList