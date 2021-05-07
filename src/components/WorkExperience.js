import React from "react";

import "../styles/workExperience.css"

function WorkExperience (props) {
    return (
        <div className="work-experience">
            <div> <i className="far fa-dot-circle"></i> {props.item.position} - {props.item.company}, {props.item.city}  </div>
            <span className="span-date">{props.item.start} - {props.item.end}</span>
            <p><b>Responsabilities:</b> {props.item.description}</p>
            <button className="btn-delete-work-experience" onClick={() => {props.delete(props.item.id, "work")}}><i className="fas fa-trash-alt"></i></button>


        </div>
    )
}

export default WorkExperience;