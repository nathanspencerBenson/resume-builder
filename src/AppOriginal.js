import React from "react";

import uniqid from 'uniqid';

import "./styles/app.css";
import Header from "./components/Header";
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: projectData,
      workExperience: workExperienceData,
      education:  educationData

    }
  }

  addProject = (project, technologies, description, link) => {
    this.setState(prevState => ({
      projects: [...prevState.projects, {
        project: project,
        technologies: technologies,
        description: description,
        link: link,
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
  }
  

  render() {

    const projectsItems = this.state.projects.map(item => <Projects item={item} delete={this.delete} />)
    const workExperienceItems = this.state.workExperience.map(item => <WorkExperience item={item} delete={this.delete}/>);
    const educationItems = this.state.education.map(item => <Education item={item} delete={this.delete} />);

    return (
      <div className="App">
        <Header />
        <main>
          <div className="cv-builder">
              <aside>
                <Personalinfo/>
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
              </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
