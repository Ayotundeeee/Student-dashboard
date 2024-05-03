import "./details.css"
import react from 'react'

const Details = ({student, closeDetails}) => {

    const fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`;
   
    return (
        
        <div className="modal-card">
            <div className="modal-card__info">
                <img className="card__img" src={student.profilePhoto} alt="" />
                <span>
                    <div className="card__fullName">
                    <strong>{fullName}</strong>
                    </div>
                    <div className="modal-card-mail-dob">
                        <div className="card__mail">{student.username}</div>
                        <div className="card__dob">Birthday: {formatBirthday(student.dob)}</div>
                    </div>
                </span>
            </div>
            <div className="x-icon-div">
                <span onClick={closeDetails} className="x-icon"><i className="fa-solid fa-xmark"></i></span>
            </div>
               

            <div className="modal-card__cards">
                <div id="modal-card__card" className="detail-card codewars">
                    <div className="detail-card__title" id="title">Codewars:</div>
                    <div className="detail-card__info">
                        <div id="current">Current Total: {student.codewars.current.total}</div>
                        <div id="last-week">Last Week: {student.codewars.current.lastWeek}</div>
                        <div id="goal">Goal: {student.codewars.goal.total}</div>
                        <div id="percentage">Percent of Goal Achieved: {`${Math.round(student.codewars.current.total / student.codewars.goal.total * 100)}%`}</div>
                    </div>    
                </div>

                <div id="modal-card__card" className="detail-card scores">
                    <div className="detail-card__title" id="title">Scores:</div>
                    <div className="detail-card__info">
                        <div id="assignments">Assignments: {`${student.cohort.scores.assignments * 100} %`}</div>
                        <div id="projects">Projects: {`${student.cohort.scores.projects * 100} %`}</div>
                        <div id="assessments">Assessments: {`${student.cohort.scores.assessments * 100} %`}</div>
                        <div id="percentage">Percent of Goal Achieved: {`${Math.round(student.codewars.current.total / student.codewars.goal.total * 100)}%`}</div>
                    </div> 
                </div>

                <div id="modal-card__card" className="detail-card status">
                    <div className="detail-card__title" id="title">Scores:</div>
                    <div className="detail-card__info">
                         <div className="status-div" id="resume">Resume: {displayStatus(student.certifications.resume)}</div>
                        <div className="status-div" id="linkedin">LinkedIn: {displayStatus(student.certifications.linkedin)}</div>
                        <div className="status-div" id="mock-interview">Mock-Interview: {displayStatus(student.certifications.mockInterview)}</div>
                        <div className="status-div" id="github">Github: {displayStatus(student.certifications.github)}</div>
                    </div>
                   
                </div>
            </div>      
        </div>

    )
}

// format Date of Birth.
function formatBirthday(dob){
    let dateSplit = dob.split("/");
    let monthNum = dateSplit[0];
    let day = dateSplit[1];
    let year = dateSplit[2];
    let month = '';
    switch (monthNum) {
        case '1':
            month = "January"
        case '2':
            month = "February"
        case '1':
            month = "March"
        case '1':
            month = "April"
        case '1':
            month = "May"
        case '1':
            month = "June"
        case '1':
            month = "July"
        case '1':
            month = "August"
        case '1':
            month = "September"
        case '1':
            month = "October"
        case '1':
            month = "November"
        case '1':
            month = "December"
    }
    return `${month} ${day}, ${year}`
  }

  //helper function for statuse icons.

  const displayStatus= (bool) =>{
    return bool === true ?
    <span className="status-icon"><i className="fa-regular fa-square-check"></i></span>
    : <span className="status-icon"><i className="fa-solid fa-square-xmark"></i></span>;
  }

export default Details;