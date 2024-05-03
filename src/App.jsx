import { useState } from 'react'
import './App.css'
import LeftNav from "./Components/leftNav/LeftNav"
import Header from "./Components/header/Header"
import ProfileList from "./Components/profileList/ProfileList"
import Details from './Components/modal/Details'
import studentData from "./data/data.json";

function App() {

  const list = [];
    
    // create array with all given cohort codes.
    studentData.forEach(student => list.push(student.cohort.cohortCode));

    //extract unique cohort codes and create array to hold them.
    const uniqueList = new Set(list);
    const listArr = Array.from(uniqueList);

    // sort cohort codes fist by year, and then session.
    let newList = [];
    const semesterObj ={"Spring": 1, "Summer": 2, "Fall": 3, "Winter": 4}
    listArr.forEach(ele => newList.push([ele.substring(0, ele.length - 4), ele.substring(ele.length - 4)]));
    
    newList.sort((a, b) => {
        if(Number(a[1])=== Number(b[1])){
            return semesterObj[b[0]] - semesterObj[a[0]];
        }
        else {
            return Number(b[1]) - Number(a[1]);
        }
    })

    // add option for "all students"
    newList.unshift("All Students");

    //set required states for components.
  const [showDetails, setShowDetails] = useState(false);
  const [currentStudent, setCurrentStudent ] = useState(null);
  const [semesterOptions, setSemesterOptions] = useState(newList);
  const [filterValue, updateFilterValue] = useState("AllStudents");
  const [searchValue, updateSearchValue] = useState("");

  const filtered = studentData.filter(student => student.cohort.cohortCode === filterValue);
  const filteredStudents = [];
  if(filtered.length > 0){
    filteredStudents.push(...filtered)
  }
  else{
    filteredStudents.push(...studentData);
  }
  
  //functions to open and close modular.
  const openDetails = (student)=> {
    setCurrentStudent(student);
    setShowDetails(true);
  }

  const closeDetails = () => {
    setShowDetails(false);
  }

  //function for filter.
  const handleFilterSelect = (filterValue)=>{
          updateFilterValue(filterValue);
  }

  // function for search.
  const handleSearchInput = (searchValue)=>{
    updateSearchValue(searchValue);
  }

  const searched = (filteredStudents) => {
    if(searchValue){
      const searchResult = filteredStudents.filter(student => {
        
        return Object.entries(student.names)
        .join(' ')
        .toLowerCase()
        .includes(searchValue.toLowerCase())

      })
      return searchResult;
    }
    else{
      return filteredStudents;
    }
}

console.log(searched(filteredStudents))

  return (

    <div className='container'>

      <LeftNav
        studentData={studentData}
        semesterOptions={semesterOptions}
        formatSemester={formatSemester}
        currentFilter={filterValue}
      />

      <Header
        studentData={studentData}
        semesterOptions={semesterOptions}
        formatSemester={formatSemester}
        handleFilterSelect={handleFilterSelect}
        handleSearchInput={handleSearchInput}
      />

      <ProfileList 
        studentData = {filteredStudents}
        openDetails={openDetails}
        semesterOptions={semesterOptions}
        currentFilter={filterValue}
        formatSemester={formatSemester}
      />

      {showDetails && <div className='details-overlay' onClick={closeDetails}>
        <Details student={currentStudent}
        closeDetails={closeDetails}/></div>
      }

    </div>
  )
}

//helper function to format semester.
function formatSemester (semester){
  return `${semester[0]} ${semester[1]}`
}

export default App;
