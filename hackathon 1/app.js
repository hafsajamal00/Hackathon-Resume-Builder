var btnSwitch = document.getElementById('btn');
var Skills = document.getElementById('Skills');
btnSwitch.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = "none";
    }
});
