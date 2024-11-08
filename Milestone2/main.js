var formElement = document.getElementById("resume-form");
formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name")
        .value;
    var email = document.getElementById("email")
        .value;
    var phone = document.getElementById("phone")
        .value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills")
        .value;
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-phone").textContent = phone;
    document.getElementById("output-education").textContent =
        education;
    document.getElementById("output-experience").textContent =
        experience;
    document.getElementById("output-skills").textContent =
        skills;
    var resumeOutput = document.getElementById("resume-output");
    resumeOutput.style.display = "block";
    resumeOutput.classList.add(" #resume-output p ,resume-output strong, resume-output span");
});
