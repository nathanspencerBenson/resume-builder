import React from "react";


function ProjectForm (props) {
        return (
            <form className="project-form" onSubmit={(e) => {
                e.preventDefault();
                let project = document.getElementById('project');
                let technologies = document.getElementById('technologies');
                let link = document.getElementById('link');
                let code = document.getElementById('code')
                let description = document.getElementById('description-project')
                props.addProject( project.value, technologies.value, description.value, link.value, code.value);
                e.target.classList.toggle("visible");
                e.target.reset();
            }}>
                <label htmlFor="project">PROJECT</label><br/>
                <input type="text" id="project" name="project" placeholder="Project"></input><br/>
                <label htmlFor="technologies">TECHNOLOGIES USED</label><br/>
                <input type="text" id="technologies" name="technologies" placeholder="eg: HTML, CSS, JAVASCRIPT"></input><br/>
                <label htmlFor="link">LINK TO DEMO</label><br/>
                <input type="text" id="link" name="link" placeholder="Link to project"></input><br/>
                <label htmlFor="code">LINK TO CODE</label><br/>
                <input type="text" id="code" name="code" placeholder="Link to code repisotory"></input><br/>
                <label htmlFor="description-project">SHORT DESCRIPTION</label><br/>
                <textarea id="description-project" name="description-project" rows="8" cols="80" placeholder="Keep it short and simple. Maximum three sentences."/><br/> 

                <button>Add</button>
                
                

            </form>
        )

    
}


export default ProjectForm;