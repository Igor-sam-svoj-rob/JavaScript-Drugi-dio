"use strict";

/* Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

1) napravi listu racuni koja sadrži 10 vrijednosti između 1 i 400.

2) napravi prazne liste za napojnice i totale (racun + napojnica)

3)Vaš zadatak je izračunati napojnicu ovisno o veličini računa.Ovo smo već izračunali, koristimo istu funkciju 
koju smo koristili zadnji put. Onda upotrijebite for petlju kako bi napravili 10 kalkulacija.

tip: pozovite napojnica varijablu iz točke 3 unutar petlje i upotrijebite push metodu kako bi dodali vrijednosti
napojnici i ukupnim listama

Bonus : napišite funkciju napojnicaProsjek koja uzima listu nazvanu arr kao argument. Ova funkcija računa
prosjek svih brojeva u svojoj listi. Ovdje ima stvari koje još nismo radili ali eto ako želite probati

savjet : prvo zbrojite sve vrijednosti u listi. Za dio sa zbrajanjem krenite sa kreiranjem varijable sum koja
kreće sa početnom vrijednosti 0. U svakoj iteraciji dodajte trenutnu vrijednost liste u sum varijablu.

savjet 2 : za izračun prosjeka, podijelite sumu koju ste dobili sa brojem članova liste.

savjet 3 : pozovite funkciju sa (racun + napojnica) listom*/

const calcNapojnica = function (racun) {
  return racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

const racuni = [125, 555, 44, 344, 230, 23, 76, 590, 390, 290];

let napojnica = [];
let ukupno = [];

for (let i = 0; i < racuni.length; i++) {
  const tip = calcNapojnica(racuni[i]);
  napojnica.push(tip);
  ukupno.push(tip + racuni[i]);
}

console.log(racuni, napojnica, ukupno);

/*Radimo generičku funkciju koja može računati bez obzira na vrijednosti,
kako prolazimo kroz listu stalno ćemo dodavati novu vrijednost u sumu.
*/
const calcProsjek = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum  = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcProsjek([2, 3, 7]));
console.log(calcProsjek(ukupno));
console.log(calcProsjek(napojnica));
