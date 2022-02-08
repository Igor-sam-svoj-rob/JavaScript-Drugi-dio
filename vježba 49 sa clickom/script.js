"use strict";

const circle = document.querySelector("#circle");

circle.addEventListener("click", function () {
  if (circle.style.transform === "scale(2)") {
    circle.style.transform = "revert";
  } else {
    circle.style.transform = "scale(2)";
  }
});
