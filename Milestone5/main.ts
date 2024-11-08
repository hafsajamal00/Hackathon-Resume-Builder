var form = document.getElementById("resume-form") as HTMLFormElement;
var resumeDisplayElement = document.getElementById(
  "resume-output"
) as HTMLDivElement;
var shareableLinkContainer = document.getElementById(
  "share-url-container"
) as HTMLDivElement;
var shareableLinkElement = document.getElementById("link") as HTMLAnchorElement;
var downloadPdfButton = document.getElementById("pdf-btn") as HTMLButtonElement;

form.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  const resumeData = { name, email, phone, education, experience, skills };
  localStorage.setItem(username, JSON.stringify(resumeData));

  (document.getElementById("output-name") as HTMLElement).textContent = name;
  (document.getElementById("output-email") as HTMLElement).textContent = email;
  (document.getElementById("output-phone") as HTMLElement).textContent = phone;
  (document.getElementById("output-education") as HTMLElement).textContent =
    education;
  (document.getElementById("output-experience") as HTMLElement).textContent =
    experience;
  (document.getElementById("output-skills") as HTMLElement).textContent =
    skills;

  resumeDisplayElement.style.display = "block";

  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

downloadPdfButton.addEventListener("click", () => {
  window.print();
});

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (username) {
    const savedResumeData = localStorage.getItem(username);

    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("phone") as HTMLInputElement).value =
        resumeData.phone;
      (document.getElementById("education") as HTMLTextAreaElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLTextAreaElement).value =
        resumeData.experience;
      (document.getElementById("skills") as HTMLTextAreaElement).value =
        resumeData.skills;
    }
  }
});
