"use strict";

const igorLista = [
  "Igor",
  "Jevremović",
  2022 - 1983,
  "SamoSvojRob",
  ["Marko", "Luka", "Matija"],
];

//idemo loopat od kraja prema početku

for (let i = igorLista.length - 1; i >= 0; i--) {
  console.log(igorLista[i]);
}

//idemo sad loop u loopu

for (let vjezba = 1; vjezba < 4; vjezba++) {
  console.log(`----kreće vježba ${vjezba}`);

  for (let ponavljanje = 1; ponavljanje < 6; ponavljanje++) {
    console.log(`vježba ponavljanje ${ponavljanje}`);
  }
}

/* ovo se dešava jer je loop u loopu, kada prvi loop krene i odradi svoju prvu rundu,
drugi loop kreće sa tom iteracijom i odradi se do kraja. Nakon toga prvi loop kreće
u drugu rundu, a ponavljanje loop se opet u toj i svakoj iteraciji izvede odmah iza toga 

RADI urednijeg koda zadnji console log možemo napisati ovako:
console.log(`vježba ${vjezba} ponavljanje ${ponavljanje}`)
*/
