"use strict";

//od novonapravljene varijable koja sadrži listu godina želimo izračunati dob svih ljudi

const godine = [1991, 2007, 1988, 2001];
const dob = [];

for (let i = 0; i < godine.length; i++) {
  dob.push(2022 - godine[i]);
}

console.log(dob);

//continue i break, krenimo sa continue loop

const igorLista = [
  "Igor",
  "Jevremović",
  2022 - 1983,
  "SamoSvojRob",
  ["Marko", "Luka", "Matija"],
];

/*recimo da samo želimo vidjeti string elemente, u kodu ispod kažemo da pri prolazu liste,
kada naletimo na nešto što NIJE string nastavljamo dalje (continue)*/

for (let i = 0; i < igorLista.length; i++) {
  if (typeof igorLista[i] !== "string") continue;
  // kada naleti na nešto što nije string, continue će automatski prebaciti na idući string
  console.log(igorLista[i], typeof igorLista[i]);
}

//break loop
for (let i = 0; i < igorLista.length; i++) {
  if (typeof igorLista[i] === "number") break;
  /* break će ispisivati sve redom dok ne dođe do broja, onda će kompletno zaustaviti izvođenje if petlje
    i neće više ništa ispisati nakon što naleti na broj */
  console.log(igorLista[i], typeof igorLista[i]);
}
