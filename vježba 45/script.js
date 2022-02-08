"use strict";

const iznos = document.getElementById("iznos");
const gosti = document.getElementById("gosti");
const kvaliteta = document.getElementById("kvaliteta");
const tipIznos = document.getElementById("tip-iznos");

/*varijabla tip će izračunati koliko dugujete za napojnicu*/
function calculate() {
  const tip = iznos.value * kvaliteta.value;
  iznos.value = "";
  kvaliteta.value = "";
  //Ne želimo da ako korisnik ništa ne ukuca dobijemo NaN vrijednost, idemo to rješiti

  if (tip === "NaN") {
    tipIznos.innerHTML = "Napojnica je 0";
    //Također ćemo trebati funkciju koja će to prikazati, pa ćemo ju ovdje pokrenuti,
    //a kasnije definirat
    showTipIznos();
  } else {
    tipIznos.innerHTML = "Napojnica je " + tip + "€";
    showTipIznos();
  }
}

function showTipIznos() {
  const x = tipIznos;
  x.className = "show"; //Ovo će klasu visibility hidden iz css-a pokazati
  setTimeout(function () {
    /* ovo će promijeniti ime klase iz show nazad u ono što je bilo. Znači napraviti
    ćemo replace sa praznim stringom. i želimo da traje 3 sekunde na ekranu*/
    x.className = x.className.replace("show", "");
  }, 3000);
}
