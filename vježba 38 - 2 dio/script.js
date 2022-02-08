"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener("click", openModal);
}

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Keyboard element je globalni event, kako bi uhvatili koji gumb je pritisnut, funkciji
//moramo dati određeni parametar

document.addEventListener("keydown", function (event) {
  //ubacujemo koji gumb će zatvarati modul
  if (event.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      //Ovu liniju ćeš čitati ovako : Ako modal sa
      //klasom ne sadrži klasu hidden onda ćeš odvrtiti slijedeće
      closeModal();
    }
  }
});

//Ovo iznad možemo napisati i ovako:
/* document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
}); */
