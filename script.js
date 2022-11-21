const button = document.querySelector(".darkmode");
const elements = document.querySelectorAll(".light-mode");
const images = document.getElementById("imgClickAndChange");
const jobTitle = document.querySelector(".header-text-container p")

button.addEventListener("click", changeMode);

setInterval(changeJobTitle, 2000)

function changeMode() {
  elements.forEach((element) => {
    if (element.classList.contains("light-mode")) {
      element.classList.remove("light-mode");
    } else {
      element.classList.add("light-mode");
    }
  });
}

function changeImage() {
    if (images.getAttribute("src") == "./images/moon.png") {
        images.src = "./images/sun.png";
    } else {
        images.src = "./images/moon.png";
    }
}

function changeJobTitle() {
    if (jobTitle.innerHTML === "Full-Stack Engineer") {
        jobTitle.innerHTML = "Web Developer";
    } else if (jobTitle.innerHTML === "Web Developer") {
        jobTitle.innerHTML = "Software Engineer";
    } else if (jobTitle.innerHTML === "Software Engineer") {
        jobTitle.innerHTML = "Full-Stack Engineer"
    }
}