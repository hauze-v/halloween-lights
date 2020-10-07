const circle = document.querySelectorAll(".circle");
const onButton = document.getElementById("On");
const offButton = document.getElementById("Off");
const runButton = document.querySelector(".submit-button");
const title = document.querySelector(".title");
const speedInput = document.getElementById("speed-input");
let len = circle.length;

// On function
const on = function() {
  for (let i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
  }
}

// Off function
const off = function() {
  title.style.animation = "none";

  for (let i = 0; i < len; i++) {
    circle[i].style.animation = "none";
    circle[i].style.background = "#272121";
  }
}

function convert() {
  let speed = speedInput.value;

  for (let i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + "s";
  }
}

onButton.addEventListener("click", on);
offButton.addEventListener("click", off);