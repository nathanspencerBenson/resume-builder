import React from "react";
import '../styles/personalinfo.css';


function Personalinfo (props) {
    
    const updatedSkills = props.skill.map((item) => {
        return(
                <li> {item.name}  <button className="btn-delete-skill" onClick={() => {props.delete(item.id, "skill")}}><i className="fas fa-trash-alt"></i></button>  </li>
               
        )
            
    
    })
   
    let portDisplayLink = props.links.portfolio.slice(12, -1);
    let githubDisplayLink = props.links.github.slice(12, -1);
    let linkedinDisplayLink = props.links.linkedin.slice(12, -1);

    return (
        <div className="personal-info">
            <div className="container-image">
            <div className="container-website visible">
                <div className="container-website-display">
                    <div><a href={props.links.portfolio}><i className="fab fa-internet-explorer"></i>{portDisplayLink}</a></div>
                    <div><a href={props.links.github}><i className="fab fa-github"></i>{githubDisplayLink}</a></div>
                    <div><a href={props.links.linkedin}><i className="fab fa-linkedin"></i>{linkedinDisplayLink}</a></div>
                </div>
                <form className="personal-info-form" onSubmit={(e) => {
                    e.preventDefault();
                    let portfolio = document.getElementById('portfolio-input').value;
                    let github = document.getElementById('github-input').value;
                    let linkedin = document.getElementById('linkedin-input').value;
                    props.addLinks(portfolio, github, linkedin)
                    document.querySelector('.container-website-display').classList.toggle('visible');
                    document.querySelector('.personal-info-form').classList.toggle('invisible');
                     e.target.reset();
                }}>
                    <label htmlFor="email-input">Link your Portfolio</label><br />
                    <input id="portfolio-input" type="text" placeholder="https:://www.example.com"/><br />
                    <label htmlFor="github-input">Link your Github</label><br />
                    <input id="github-input" type="text" placeholder="https:://www.example.com"/><br />
                    <label htmlFor="linkedin-input">Link your Linkedin</label><br />
                    <input id="linkedin-input" type="text" placeholder="https:://www.example.com"></input>
                    <input type="submit" />

                </form>
            </div>
            
            </div>
             
            <div className="container-about">
            <h1> About me </h1>
            <textarea id="about" name="about" rows="8" cols="30" placeholder="Write a brief introduction about yourself."/>
            </div>
            <div className="container-contact">
            <h1> Contact </h1>
                <div><i className="fas fa-phone-square-alt"></i><input id="input-phone-number" type="text" placeholder="Phone"/></div>
                <div><i className="fas fa-envelope"></i><input id="input-email" type="email" placeholder="Email"/></div>
                <div><i className="far fa-star"></i><input id="input-birthday" type="text" placeholder="Birthday"></input></div>
                <div className="container-address"><i className="fas fa-home"></i><div><input id="input-address" type="text" placeholder="address 1"></input><input id="input-address2" type="text" placeholder="address 2"></input></div></div>
            </div>
            <div className="container-skills">
                <h1> Tech Skills </h1>
                <ul>
                    { updatedSkills}
                </ul>
                <form className="skills-form" onSubmit={(e) => {
                    e.preventDefault();
                    let skillInput = document.getElementById('skill-input');
                    props.addSkill(skillInput.value)
                    e.target.reset()
                   
                }}>
                    <label htmlFor="skill-put">Add Skill</label> <br />
                    <input type="text" id="skill-input" name="skill-input" placeholder="e.g JAVASCRIPT"></input>
                    <input type="submit" value="add"></input>
                </form>
            </div>
        </div>
    )
}


export default Personalinfo;