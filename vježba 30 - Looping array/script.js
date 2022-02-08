"use strict";

const igorLista = [
  "Igor",
  "Jevremović",
  2022 - 1983,
  "SamoSvojRob",
  ["Marko", "Luka", "Matija"],
];

const types = [];

for (let i = 0; i < igorLista.length; i++) {
  console.log((types[i] = typeof igorLista[i]));
  //na ovaj način iz postojeće liste uzimamo samo vrste vrijednosi članova liste koja se nalazi u igorLista
}

console.log(types);
