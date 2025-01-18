const previewSection = document.getElementById("preview-live") as HTMLElement;

const inputSection = document.getElementById("form-section") as HTMLElement;
const container = document.getElementById("container") as HTMLElement;
const generateButton = document.getElementById("generate") as HTMLButtonElement;
const form = document.getElementById("form") as HTMLFormElement;
const experienceContainer = document.querySelector(
  ".experience-portion"
) as HTMLElement;
const educationContainer = document.querySelector(
  ".education-portion"
) as HTMLElement;
const projectsContainer = document.querySelector(
  ".project-portion"
) as HTMLElement;

const experiencePreview = document.querySelector(
  ".dynamic-expereience-preview"
) as HTMLElement;
const educationPreview = document.querySelector(
  ".dynamic-eduaction-preview"
) as HTMLElement;
const projectsPreview = document.querySelector(
  ".dynamic-projects-preview"
) as HTMLElement;
const addmoreButtons = document.querySelectorAll(
  ".Addmore"
) as NodeListOf<HTMLButtonElement>;

// Dynamic Addmore functionality
addmoreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionType = (button as HTMLButtonElement).dataset.section;

    if (sectionType === "experience") {
      addExperience();
    } else if (sectionType === "education") {
      addEducation();
    } else if (sectionType === "projects") {
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
  const allInputs = document.querySelectorAll(
    ".input-place"
  ) as NodeListOf<HTMLInputElement>;
  const allTextareas = document.querySelectorAll(
    ".textarea-place"
  ) as NodeListOf<HTMLTextAreaElement>;

  allInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      const inputPreviews = document.querySelectorAll(
        ".preview-input"
      ) as NodeListOf<HTMLElement>;
      if (inputPreviews[index]) {
        inputPreviews[index].textContent = input.value.trim();
      }
      showPreview();
    });
  });

  allTextareas.forEach((textarea, index) => {
    textarea.addEventListener("input", () => {
      const textareaPreviews = document.querySelectorAll(
        ".preview-textarea"
      ) as NodeListOf<HTMLElement>;
      if (textareaPreviews[index]) {
        textareaPreviews[index].textContent = textarea.value.trim();
      }
      showPreview();
    });
  });

  function showPreview() {
    const hasPersonal = Array.from(allInputs).some(
      (input) => input.value !== ""
    );
    const hasParagraph = Array.from(allTextareas).some(
      (input) => input.value !== ""
    );
    const hasValues = hasPersonal || hasParagraph;

    if (previewSection) {
      previewSection.style.display = hasValues ? "block" : "none";
    
    }
  
    function genrateResume() {
      inputSection.style.display = hasValues ? "none" : "block";;
      container.style.alignItems = "center";
      container.style.justifyContent = "center";
    }
    generateButton.addEventListener("click", () => {
      genrateResume();
    });
  }
}

syncInputsAndPreviews();
