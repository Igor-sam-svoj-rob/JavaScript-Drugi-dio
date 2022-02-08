"use strict";

/* document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-tipka="${e.keyCode}"]`);
  console.log(audio);
}); */

"use strict";

document.addEventListener("keydown", sviraj);

function sviraj(event) {
  const audio = document.querySelector(`audio[data-tipka="${event.keyCode}"]`);
  const tipka = document.querySelector(`div[data-tipka="${event.keyCode}"]`);
  if (!audio) return;

  tipka.classList.add("active");
  audio.currentTime = 0;
  audio.play();
}

const tipke = Array.from(document.querySelectorAll(".tipka"));

tipke.forEach((tipka) =>
  tipka.addEventListener("transitionend", removeTransition)
);

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("active");
}
