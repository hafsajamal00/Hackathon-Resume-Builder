var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-output");
var shareableLinkContainer = document.getElementById("share-url-container");
var shareableLinkElement = document.getElementById("link");
var downloadPdfButton = document.getElementById("pdf-btn");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username")
        .value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    localStorage.setItem(username, JSON.stringify(resumeData));
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-phone").textContent = phone;
    document.getElementById("output-education").textContent =
        education;
    document.getElementById("output-experience").textContent =
        experience;
    document.getElementById("output-skills").textContent =
        skills;
    resumeDisplayElement.style.display = "block";
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value =
                username;
            document.getElementById("name").value =
                resumeData.name;
            document.getElementById("email").value =
                resumeData.email;
            document.getElementById("phone").value =
                resumeData.phone;
            document.getElementById("education").value =
                resumeData.education;
            document.getElementById("experience").value =
                resumeData.experience;
            document.getElementById("skills").value =
                resumeData.skills;
        }
    }
});
