import React from "react";


function WorkExperienceForm (props) {
        return (
            <form className="work-experience-form" onSubmit={(e) => {
                e.preventDefault();
                let position = document.getElementById('position');
                let company = document.getElementById('company');
                let city = document.getElementById('city');
                let start = document.getElementById('start');
                let end = document.getElementById('end');
                let description = document.getElementById('description')
                props.addWorkExperience( position.value, company.value, city.value, start.value, end.value, description.value);
                e.target.classList.toggle("visible");
                e.target.reset();
            }}>
                <label htmlFor="position">Position</label><br/>
                <input type="text" id="position" name="position" placeholder="Position"></input><br/>
                <label htmlFor="company">Company Name</label><br/>
                <input type="text" id="company" name="company" placeholder="Company"></input><br/>
                <label htmlFor="city">City</label><br/>
                <input type="text" id="city" name="city" placeholder="City"></input><br/>
                <div className="work-date">
                    <label htmlFor="start">From</label><br/>
                    <input type="text" id="start" name="start" placeholder="YYYY"></input><br/>
                    <label htmlFor="end">To</label><br/>
                    <input type="text" id="end" name="end" placeholder="YYYY"></input><br/>
                </div>
                <label htmlFor="description">Further Description or Achievements</label><br/>
                <textarea id="description" name="description" rows="8" cols="80" placeholder="Keep it short and simple. Maximum three sentences."/><br/> 

                <button>Add</button>
                
                

            </form>
        )

    
}


export default WorkExperienceForm;