import "./card.css"
import react from 'react'
import Details from "../modal/Details"

const Card = ({student, openDetails}) => {
    const fullName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`
    return (
        <div className="card">
            <i onClick={()=> openDetails(student)} className="fa-solid fa-up-right-and-down-left-from-center arrows"></i>
            <img className="card__img" src={student.profilePhoto} alt="" />  
            <div className="card__fullName"><strong>{fullName}</strong></div>
            <div>
                <div className="card__mail"><a href="#">{student.username}</a></div>
                <div className="card__dob">Birthday: {formatBirthday(student.dob)}</div>
            </div>
            <button onClick={()=> openDetails(student)} className="card__btn">More Details</button>
        
        </div>
    )
  }

  // format Date of Birth
  function formatBirthday(dob){
    let dateSplit = dob.split("/");
    let monthNum = dateSplit[0];
    let day = dateSplit[1];
    let year = dateSplit[2];
    let month = '';
    switch (monthNum) {
        case '1':
            month = "January"
            break;
        case '2':
            month = "February"
            break;
        case '3':
            month = "March"
            break;
        case '4':
            month = "April"
            break;
        case '5':
            month = "May"
            break;
        case '6':
            month = "June"
            break;
        case '7':
            month = "July"
            break;
        case '8':
            month = "August"
            break;
        case '9':
            month = "September"
            break;
        case '10':
            month = "October"
            break;
        case '11':
            month = "November"
            break;
        case '12':
            month = "December"
            break;
    }
    return `${month} ${day}, ${year}`
  }
  export default Card