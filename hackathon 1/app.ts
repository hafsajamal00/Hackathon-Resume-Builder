const btnSwitch = document.getElementById("btn") as HTMLButtonElement;
const Skills = document.getElementById("Skills") as HTMLElement;

btnSwitch.addEventListener("click", () => {
  if (Skills.style.display === "none") {
    Skills.style.display = "block";
  } else {
    Skills.style.display = "none";
  }
});
