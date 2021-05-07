import React from "react";
import '../styles/previewButton.css';


function PreviewEditButtons () {
  
    let forms = Array.from(document.getElementsByTagName('form'));

    function editSelected () {
        let previewButton = document.querySelector('.preview-mode-button');
        let editButton = document.querySelector('.edit-mode-button');
        let deleteButtons = Array.from(document.querySelectorAll('.btn-delete-work-experience'));
        let addButtons = Array.from(document.querySelectorAll('.btn-work-experience'));
        let asideButtons = Array.from(document.querySelectorAll('.btn-delete-skill'));
        let buttonsArray = deleteButtons.concat(addButtons, asideButtons);
        document.querySelector('.skills-form').classList.remove('invisible')
        document.querySelector('.personal-info-form').classList.remove('invisible')
        
        editButton.classList.add('mode-selected');
        previewButton.classList.remove('mode-selected');
        buttonsArray.map((button) => {
            button.classList.remove('invisible');
            button.classList.add('visible');
            return button
          })
        

    }

    function previewSelected () {
        let previewButton = document.querySelector('.preview-mode-button');
        let editButton = document.querySelector('.edit-mode-button');  
        let deleteButtons = Array.from(document.querySelectorAll('.btn-delete-work-experience'));
        let addButtons = Array.from(document.querySelectorAll('.btn-work-experience'));
        let asideButtons = Array.from(document.querySelectorAll('.btn-delete-skill')); 
        let buttonsArray = deleteButtons.concat(addButtons, asideButtons);
        previewButton.classList.add('mode-selected');
        editButton.classList.remove('mode-selected');
        document.querySelector('.skills-form').classList.add('invisible');
        document.querySelector('.personal-info-form').classList.add('invisible');
        forms.map((form) => form.classList.remove('visible'));
        buttonsArray.map((button) => {
           button.classList.add('invisible');
           button.classList.remove('visible');
           return button
         })

    }
    

    return (
        <div className="preview-button-container">
            <button className={`edit-mode-button mode-selected`} onClick={editSelected}>Edit Mode</button>
            <p>OR</p>
            <button className="preview-mode-button" onClick={previewSelected}>Preview Mode</button>
        </div>
    )
}


export default PreviewEditButtons;