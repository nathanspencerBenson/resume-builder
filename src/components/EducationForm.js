import React from "react";


function EducationForm (props) {
        return (
            <form className="education-form" onSubmit={(e) => {
                e.preventDefault();
                let school = document.getElementById('school');
                let degree = document.getElementById('degree');
                let city = document.getElementById('edu-city');
                let start = document.getElementById('edu-start');
                let end = document.getElementById('edu-end');
                let description = document.getElementById('edu-description')
                props.addEducation( school.value, degree.value, city.value, start.value, end.value, description.value);
                e.target.classList.toggle("visible");
                e.target.reset();
            }}>
                <label htmlFor="degree">Degree</label><br/>
                <input type="text" id="degree" name="degree" placeholder="Degree"></input><br/>
                <label htmlFor="school">School</label><br/>
                <input type="text" id="school" name="school" placeholder="School"></input><br/>
                <label htmlFor="city">City</label><br/>
                <input type="text" id="edu-city" name="edu-city" placeholder="City"></input><br/>
                <div className="work-date">
                    <label htmlFor="edu-start">From</label><br/>
                    <input type="text" id="edu-start" name="edu-start" placeholder="YYYY"></input><br/>
                    <label htmlFor="edu-end">To</label><br/>
                    <input type="text" id="edu-end" name="edu-end" placeholder="YYYY"></input><br/>
                </div>
                <label htmlFor="edu-description">Further Description or Achievements</label><br/>
                <textarea id="edu-description" name="edu-description" rows="8" cols="80" placeholder="Keep it short and simple. Maximum three sentences."/><br/> 

                <button>Add</button>
                
                

            </form>
        )

    
}


export default EducationForm;