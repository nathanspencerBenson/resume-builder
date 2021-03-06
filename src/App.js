
import React from "react";

import uniqid from 'uniqid';

import "./styles/app.css";
import Header from "./components/Header";
import PreviewEditButtons from "./components/PreviewEditButtons";
import HeaderCv from "./components/HeaderCv";
import Personalinfo from "./components/Personalinfo";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";
import WorkExperience from "./components/WorkExperience";
import WorkExperienceForm from "./components/WorkExperienceForm";
import Education from "./components/Education";
import EducationForm from "./components/EducationForm";



import workExperienceData from "./workExperienceData";
import educationData from "./educationData";
import projectData from "./projectData";

import ReactToPrint from 'react-to-print';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      links: {
        portfolio: "",
        github: "",
        linkedin: ""
      },
      projects: [],
      workExperience: [],
      education:  [],
      skills: []
    }
  }


  showTemplateCv = () => { 
    this.setState(() => ({
      links: {
        portfolio: "https://www.webdeveloper.com/",
        github: "https://www.github.com/",
        linkedin: "https://www.linkedin.com/"
      },
      projects: projectData,
      workExperience: workExperienceData,
      education:  educationData,
      skills: [ {
        name: "HTML",
        id: uniqid()
      },
      {name: "JAVASCRIPT",
      id: uniqid(),
    },
    { name: "CSS",
  id: uniqid()}
  ]
    }
))

document.getElementById('full-name').setAttribute("placeholder", "Nathan Benson");
document.getElementById('job-title').setAttribute("placeholder", "Web Developer");
document.getElementById('about').setAttribute("placeholder", "orem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, urna vel efficitur placerat, felis dolor pretium tellus, eu mattis ipsum velit in nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et augue ac neque pulvinar rutrum. Nullam congue tellus quis felis tempus vehicula. Sed porta quam nec tortor dapibus, eu lacinia lorem hendrerit. Sed mi metus, gravida at ligula sit amet, facilisis vulputate felis. Vivamus viverra maximus dolor.");
document.getElementById('input-phone-number').setAttribute("placeholder", "012 345 6789");
document.getElementById('input-email').setAttribute("placeholder", "developer@web.com");
document.getElementById('input-birthday').setAttribute("placeholder", "01/01/2001");
document.getElementById('input-address').setAttribute("placeholder", "Main Street 1");
document.getElementById('input-address2').setAttribute("placeholder", " 2207 Big City");


  }
  


  addLinks = (portfolio, github, linkedin) => {
    this.setState(() => ({
      links: {
        portfolio: portfolio,
        github: github,
        linkedin: linkedin
      }

      
    }))
  }

  addSkill = (name) => {
    this.setState(prevState => ({
      skills: [...prevState.skills, {
        name: name,
        id: uniqid(),
      }]
    }))

  }

  addProject = (project, technologies, description, link, code) => {
    this.setState(prevState => ({
      projects: [...prevState.projects, {
        project: project,
        technologies: technologies,
        description: description,
        link: link,
        code: code,
        id: uniqid()
      }]
    }))

  }

  buttonProjects = () => {
    document.querySelector('.project-form').classList.toggle('visible');
  }

  
  addWorkExperience = (position, company, city, start, end, description) => {
    this.setState(prevState => ({
      workExperience: [...prevState.workExperience, {
        position: position,
        company: company,
        city: city,
        start: start,
        end: end,
        description: description,
        id: uniqid()
      }]
    }));
  }
  
  buttonWorkExperience = () => {
    document.querySelector('.work-experience-form').classList.toggle('visible');
  }
  
  addEducation = (school, city, degree, start, end, description) => {
    this.setState(prevState => ({
      education: [...prevState.education, {
        school: school,
        city: city,
        degree: degree,
        start: start,
        end: end,
        description: description,
        id: uniqid()
      }]
    }))
    
  }
  
  buttonEducation = () => {
    document.querySelector('.education-form').classList.toggle('visible');
  }

  delete = (id, arrayTarget) => {
    if(arrayTarget === "work") {
      var filteredWorkExperience = this.state.workExperience.filter(function(e) { return e.id !== id })
      this.setState(prevState => ({
        workExperience: filteredWorkExperience
      }))
    }
    else if(arrayTarget === "education") {
      var filteredEducation = this.state.education.filter(function(e) { return e.id !== id })
      this.setState(prevState => ({
        education: filteredEducation
      }))
    }
    else if(arrayTarget === "projects") {
      var filteredProjects = this.state.projects.filter(function(e) { return e.id !== id })
      this.setState(prevState => ({
        projects: filteredProjects
      }))
    }
    else if(arrayTarget === "skill") {
      var filteredSkills = this.state.skills.filter(function(e) { return e.id !== id })
      this.setState(prevState => ({
        skills: filteredSkills
      }))
    }
  }
  

  render() {
    
    const projectsItems = this.state.projects.map(item => <Projects item={item} delete={this.delete} />)
    const workExperienceItems = this.state.workExperience.map(item => <WorkExperience item={item} delete={this.delete}/>);
    const educationItems = this.state.education.map(item => <Education item={item} delete={this.delete} />);
    return (
      <div className="App">
        <Header />
        <main>
          <PreviewEditButtons />
          <div className="container-pdf-template">
            <ReactToPrint 
            trigger={() => {
              return <button className="save-link"><i class="fas fa-file-pdf"></i>SAVE AS PDF</button>;
            }}
            content={() => this.cvPdf}
            />
            <button className="template-cv-button" onClick={this.showTemplateCv}> <i class="fas fa-file"></i>TEMPLATE CV</button>
          </div>
          <div className="cv-builder" ref={el => (this.cvPdf = el)}>
              <aside>
                <Personalinfo addLinks={this.addLinks} links={this.state.links} addSkill={this.addSkill} skill={this.state.skills} delete={this.delete}/>
              </aside>
              <section className="section-main">
              <HeaderCv />
                <h1><i className="fas fa-cogs"></i>PROJECTS</h1>
                {projectsItems}
                <button className="btn-work-experience" onClick={this.buttonProjects}>Add Project</button>
                <ProjectForm addProject={this.addProject}/>
                <h1><i className="fas fa-briefcase"></i>WORK EXPERIENCE</h1>
                {workExperienceItems}
                <button className="btn-work-experience" onClick={this.buttonWorkExperience}>Add Work Experience</button>
                <WorkExperienceForm addWorkExperience={this.addWorkExperience}/>
                <h1><i className="fas fa-graduation-cap"></i>EDUCATION</h1>
                {educationItems}
                <button className="btn-work-experience" onClick={this.buttonEducation}>Add Education</button>
                <EducationForm addEducation={this.addEducation} />
              </section >
          </div>
        </main>
        <div>
      </div>
      </div>
    );
  }
}

export default App;
