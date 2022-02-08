"use strict";

//idemo unesti varijable
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonsOpenModal = document.querySelectorAll(".show-modal");
console.log(buttonsOpenModal);

//Idemo se sada malo poigrati sa ovom node listom i ispisati tekst iz ova 3 buttona

/* for (let i = 0; i < buttonsOpenModal.length; i++) {
  console.log(buttonsOpenModal[i].textContent);
} */

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

//Mogli bi ovo napisati ovako i dodati kod ispod za zatvaranje popupa, ali bi onda morali 2 puta pisati
//i za button i za overlay

/* buttonCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}); */

//Zato što se ne želimo ponavljati napravit ćemo funkciju koja će to raditi

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//ovdje u pozivu funkciju ne možemo zvati sa zagradama, jer će se ona odmah odvrtiti
//a nama treba da se pokrene tek na klik
buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Ovim kodom skraćujem i pokazivanje pop-upa gore. Iskopiramo ovo gore i na liniji 26
//dodajemo openModal umjesto function()
/* 
const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}; */
