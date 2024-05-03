import "./semesterList.css"

const SemesterList = ({studentData, semesterOptions, currentFilter}) => {
    
    // const list = [];
    
    // // create array with all given cohort codes.
    // studentData.forEach(student => list.push(student.cohort.cohortCode));

    // //extract unique cohort codes and create array to hold them.
    // const uniqueList = new Set(list);
    // const listArr = Array.from(uniqueList);

    // // sort cohort codes fist by year, and then session.
    // let newList = [];
    // const semesterObj ={"Spring": 1, "Summer": 2, "Fall": 3, "Winter": 4}
    // listArr.forEach(ele => newList.push([ele.substring(0, ele.length - 4), ele.substring(ele.length - 4)]));
    
    // newList.sort((a, b) => {
    //     if(Number(a[1])=== Number(b[1])){
    //         return semesterObj[b[0]] - semesterObj[a[0]];
    //     }
    //     else {
    //         return Number(b[1]) - Number(a[1]);
    //     }
    // })

    // // add option for "all students"
    // newList.unshift("All Students");

    // helper function to set background color.
    // filter === "AllStudents" || filter === "default" ? "All Students"
    //: prop.formatSemester(splitFilterValue(filter))}
    
    function setBackgroundColor (semester){

        if(Array.isArray(semester)){
            if(semester.join('') === currentFilter){
                return "rgb(75, 200, 160)"
            }
        }
        
        else if(semester.split(" ").join("") === currentFilter){
            
            return "rgb(75, 200, 160)";
        }
        else{
            return '';
        }
    }
    
    return (
        <div className="semesterList">
            {semesterOptions.map((semester, index) => {
                return <div 
                        key={index} 
                        className={`${semester} semester`}
                        style={{backgroundColor : setBackgroundColor(semester)}}>
                    {index > 0 ? formatSemester(semester) : semester}</div>
            })}
        </div>
    )
  }

  //helper function to format semester.
  function formatSemester (semester){
    return `${semester[0]} ${semester[1]}`
  }
  
  export default SemesterList;