const button = document.querySelector(".darkmode");
const elements = document.querySelectorAll(".light-mode");
const images = document.getElementById("imgClickAndChange");

button.addEventListener("click", changeMode);

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
