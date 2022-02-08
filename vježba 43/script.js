"use strict";

//primjer ispisa Date funkcije u konzoli
/* function calculateTime() {
  let date = new Date();
  console.log(date);
}

calculateTime(); */

//----------------------------------------------------------------
window.addEventListener("load", calculateTime);
function calculateTime() {
  let date = new Date();
  let dan = date.getDay();
  let sat = date.getHours();
  let minute = date.getMinutes();
  let sekunde = date.getSeconds();
  let dani = [
    "Ponedjeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota",
    "Nedjelja",
  ];

  document.getElementById("dan").innerHTML = dani[dan - 1];
  document.getElementById("sat").innerHTML = sat;
  document.getElementById("minuta").innerHTML = minute;
  document.getElementById("sekunde").innerHTML = sekunde;

  setTimeout(calculateTime, 200);
}
