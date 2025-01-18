"use strict";
const previewSection = document.getElementById("preview-live");
const inputSection = document.getElementById("form-section");
const container = document.getElementById("container");
const generateButton = document.getElementById("generate");
const form = document.getElementById("form");
const experienceContainer = document.querySelector(".experience-portion");
const educationContainer = document.querySelector(".education-portion");
const projectsContainer = document.querySelector(".project-portion");
const experiencePreview = document.querySelector(".dynamic-expereience-preview");
const educationPreview = document.querySelector(".dynamic-eduaction-preview");
const projectsPreview = document.querySelector(".dynamic-projects-preview");
const addmoreButtons = document.querySelectorAll(".Addmore");
// Dynamic Addmore functionality
addmoreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionType = button.dataset.section;
        if (sectionType === "experience") {
            addExperience();
        }
        else if (sectionType === "education") {
            addEducation();
        }
        else if (sectionType === "projects") {
            addProject();
        }
    });
});
// Add new Experience fields and preview
function addExperience() {
    const newExperience = `
   <div class="section">
                <label for="experience">Position/Company:</label>
                <input
                  type="text"
                  class="input-place"
                  placeholder="Enter your Position or company name"
                  required
                />
                <div class="section2">
                  <label for="experience">Start:</label>
                  <input type="date" class="input-place" required />
                  <label for="experience">End:</label>
                  <input type="date" class="input-place" required />
                </div>
                <label for="experience">About Your Experience:</label>
                <textarea
                  class="textarea-place"
                  placeholder="describe about your Experience"
                  required
                ></textarea>
  `;
    experienceContainer.insertAdjacentHTML("beforeend", newExperience);
    const newPreview = `
   <div class="highlight">
              <li class="preview-input"></li>
              <div class="section3 list2">
                <div class="preview-input"></div>
                |
                <div class="preview-input"></div>
              </div>
            </div>
            <p class="preview-textarea"></p>
  `;
    experiencePreview.insertAdjacentHTML("beforeend", newPreview);
    syncInputsAndPreviews();
}
// Add new Education fields and preview
function addEducation() {
    const newEducation = `
    <div class="section">
                <label for="education">Education:</label>
                <input
                  type="text"
                  class="input-place"
                  placeholder="Enter your Education"
                  required
                />
                <div class="section2">
                  <label for="date">Start:</label>
                  <input type="date" class="input-place" required />
                  <label for="date">End:</label>
                  <input type="date" class="input-place" required />
                </div>
              </div>
  `;
    educationContainer.insertAdjacentHTML("beforeend", newEducation);
    const newPreview = `
   <div class="highlight">
              <li class="preview-input list"></li>
              <div class="section3">
                <div class="preview-input"></div>
                |
                <div class="preview-input"></div>
              </div>
            </div>
  `;
    educationPreview.insertAdjacentHTML("beforeend", newPreview);
    syncInputsAndPreviews();
}
// Add new Project fields and preview
function addProject() {
    const newProject = `
    <div class="section">
                <label for="project">Projects:</label>
                <input
                  type="text"
                  class="input-place"
                  placeholder="Enter your project link"
                  required
                />
                <label for="Project">About your Project:</label>
                <textarea
                  class="textarea-place"
                  placeholder=" describe your project"
                  required
                ></textarea>
              </div>
  `;
    projectsContainer.insertAdjacentHTML("beforeend", newProject);
    const newPreview = `
     <li class="preview-input"></li>
            <p id="list" class="preview-textarea">
            </p>
  `;
    projectsPreview.insertAdjacentHTML("beforeend", newPreview);
    syncInputsAndPreviews();
}
// Sync input fields and preview content dynamically
function syncInputsAndPreviews() {
    const allInputs = document.querySelectorAll(".input-place");
    const allTextareas = document.querySelectorAll(".textarea-place");
    allInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            const inputPreviews = document.querySelectorAll(".preview-input");
            if (inputPreviews[index]) {
                inputPreviews[index].textContent = input.value.trim();
            }
            showPreview();
        });
    });
    allTextareas.forEach((textarea, index) => {
        textarea.addEventListener("input", () => {
            const textareaPreviews = document.querySelectorAll(".preview-textarea");
            if (textareaPreviews[index]) {
                textareaPreviews[index].textContent = textarea.value.trim();
            }
            showPreview();
        });
    });
    function showPreview() {
        const hasPersonal = Array.from(allInputs).some((input) => input.value !== "");
        const hasParagraph = Array.from(allTextareas).some((input) => input.value !== "");
        const hasValues = hasPersonal || hasParagraph;
        if (previewSection) {
            previewSection.style.display = hasValues ? "block" : "none";
        }
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            // Call the function to generate the resume
            genrateResume();
        });
        function genrateResume() {
            inputSection.style.display = hasValues ? "none" : "block";
            ;
            container.style.alignItems = "center";
            container.style.justifyContent = "center";
        }
        generateButton.addEventListener("click", () => {
            form.dispatchEvent(new Event("submit"));
        });
    }
}
syncInputsAndPreviews();
