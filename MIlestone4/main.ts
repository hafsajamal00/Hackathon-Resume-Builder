var formElement: HTMLElement = document.getElementById("resume-form")!;

formElement.addEventListener("submit", function (event: Event) {
  event.preventDefault();
  const name: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  const email: string = (document.getElementById("email") as HTMLInputElement)
    .value;
  const phone: string = (document.getElementById("phone") as HTMLInputElement)
    .value;
  const education: string = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience: string = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills: string = (document.getElementById("skills") as HTMLInputElement)
    .value;
  (document.getElementById("output-name") as HTMLElement).textContent = name;
  (document.getElementById("output-email") as HTMLElement).textContent = email;
  (document.getElementById("output-phone") as HTMLElement).textContent = phone;
  (document.getElementById("output-education") as HTMLElement).textContent =
    education;
  (document.getElementById("output-experience") as HTMLElement).textContent =
    experience;
  (document.getElementById("output-skills") as HTMLElement).textContent =
    skills;

  const resumeOutput = document.getElementById("resume-output") as HTMLElement;
  resumeOutput.style.display = "block";
  resumeOutput.classList.add(
    " #resume-output p ,resume-output strong, resume-output span"
  );
});