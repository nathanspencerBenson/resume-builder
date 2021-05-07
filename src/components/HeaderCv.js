import React from "react";

import '../styles/headerCv.css';


function HeaderCv (props) {
    return (
        <div className="header-cv">
            <div className="profile-image"></div>
            <div className="full-name">
                <input type="text" id="full-name" placeholder="FULL NAME"/>
                <input type="text" id="job-title" placeholder="JOB TITLE" />
            </div>
        </div>
    )
}


export default HeaderCv