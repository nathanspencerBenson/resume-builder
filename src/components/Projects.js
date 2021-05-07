import React from "react";

import "../styles/workExperience.css"

function Projects (props) {
    return (
        <div className="work-experience projects-container">
            <div className="container-project-item">
                <div> <i className="far fa-dot-circle"></i> <a href={props.item.link}>{props.item.project}</a> </div>
                <span className="span-date"><b>{props.item.technologies}</b></span>
                <p>{props.item.description}</p>
            </div>
            <div className="btn-demo-preview">
                <a href={props.item.link}> <button><i className="fas fa-eye"></i>DEMO</button></a>
                <a href={props.item.code}> <button><i class="fas fa-code"></i> CODE</button></a>
            </div>
            <button className="btn-delete-work-experience" onClick={() => {props.delete(props.item.id, "projects")}}><i className="fas fa-trash-alt"></i></button>

        </div>
    )
}

export default Projects;