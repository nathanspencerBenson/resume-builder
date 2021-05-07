import React from "react";

import "../styles/workExperience.css"

function Education (props) {
    console.log(props)
    return (
        <div className="work-experience">
            <div> <i className="far fa-dot-circle"></i> {props.item.degree} - {props.item.school}, {props.item.city}  </div>
            <span className="span-date">{props.item.start} - {props.item.end}</span>
            <p>{props.item.description}</p>
            <button className="btn-delete-work-experience" onClick={() => {props.delete(props.item.id, "education")}}><i className="fas fa-trash-alt"></i></button>


        </div>
    )
}

export default Education;