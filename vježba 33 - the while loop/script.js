"use strict";

for (let i = 1; i <= 10; i++) {
  console.log(`dižemo utege ${i} puta`);
}

//while loop - isti kao ovaj gore

let i = 1;
while (i <= 10) {
  console.log(`dižemo utege ${i} puta`);
  i++;
}

/* Ajmo sada vidjeti zašto postoji while loop u odnosu na onaj gore (primjer, bacanje kocke dok ne dobijemo 6). 
Znači ne znamo kada ćemo prekinuti loop. O random brojevima ćemo pričati kasnije........
Kada koristimo Math.random to će biti broj između 0 i 1, doslovno decimalni broj stoga moramo tome doskočiti.
Kako bi maknuli decimalu pišemo Math.trunc, samo da bi dobili cijele brojeve od 1-6, moramo pomnožiti sa 6,
jer ćemo tako dobiti brojeve od 1-5, međutim, moramo dodati 1 da bi imali mogućnost 6 brojeva kocke.
(provjerite oboje na https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) */
let kocka = Math.trunc(Math.random() * 6) + 1;
console.log(kocka);
//ovo će nam odabrati random broj između 1 i 6

/*Sad ćemo uz pomoć While petlje napraviti petlju koja će ispisati sve vrijednosti dok ne
dobijemo šesticu */

while (kocka !== 6) {
  console.log(`Dobio si ${kocka}`);
  kocka = Math.trunc(Math.random() * 6) + 1;
  if (kocka === 6) console.log(`Dobio si ${kocka}`);
}
