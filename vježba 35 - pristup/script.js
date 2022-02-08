"use strict";

//PROBLEM

/* Radimo za kompaniju koja izrađuje pametni kućni termometar. Naš trenutni problem je da izračunamo iz liste
temperatura u danu amplitudu vrijednosti. Uzmite u obzir da se ponekad dogodi sensor error u mjerenju */

/* 
1) Razumijevanje problema
Što je amplutida vrijednosti u ovom slučaju? 
Odgovor : razlika između najviše i najniže temperature.

Kako izračunati min i max temperaturu?
Što je sensor error? I što napraviti?

2) Razbijanje problema na manje sekcije

Kako ignorirati sensor errore?
Naći min max vrijednosti amplitude
Napraviti funkciju oduzimanje max - min kako bi dobili amplitudu i returnati amplitudu
*/

//const calcTempAmplitude = function(temps){ - napisali smo ovo i sada ne znamo kako izračunati min max ->
//Idemo na Google i upisujemo : javascript get max value in array
/* Primjer koji smo našli ima sljedeću ideju : Pretpostavlja da je prvi element liste najveći broj i onda nakon
toga prolazi kroz listu i uspoređuje da li je idući broj veći od prvog broja. Kada nađe veći broj, zapiše
ga kao novi max broj i nastavlja dalje kroz listu uspoređivati sa slijedećim članovima. Kada prođe cijelu
listu ostat će zapisan najveći broj. Ovo je superzgodno zato što će for petlja samo jednom proći kroz listu  */

const temperatura = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const lista2 = [5, 8, 25, "error", -7, "error"];
const spojenaLista = temperatura.concat(lista2);

//OVDJE SMO IZRAČUNALI NAJVEĆI BROJ U LISTI
/* const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcTempAmplitude([3, 12, 4]); */

/* ajmo sada napraviti analizu
čim krenemo max = 3.
prvi if uspoređuje 3 sa 3 i ništa se ne dešava.
drugi krug if-a uspoređuje 3 sa 12, s obzirom da je, novi max se zapisuje
*/

//------------------------------------------------------------------

//SADA ĆEMO NA ISTI NAČIN IZRAČUNATI NAJNIŽEG ČLANA LISTE
/* const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
};

calcTempAmplitude([3, 12, 4]); 
*/

//-------------------------------------------------------

//Ako stavimo error na prvo mjesto onda se neće ništa izvrtiti, zapet će na erroru zato što smo temps
//postavili na 0 a onda će prvi član biti error. Tome ćemo doskočiti sa upotrebom continue, kako bi preskočili
//člana ako nije broj. Usput ćemo i sortirati listu kako bi se osigurali da nam lista kreće sa brojem

temperatura.sort();
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplituda = calcTempAmplitude(temperatura);
console.log(amplituda);

//VOILA - GOTOVI SMO!!!!
//Nismo... zvao lik i veli da bi oni dodali novu listu rezultata - gore dodajemo lista2

/* 
1) Razumijevanje problema
sa 2 liste, trebamo li raditi funkcionalnost opet? ne. Samo ćemo spojiti 2 liste

2) Razbijanje problema na manje sekcije
u biti imamo samo jedan. Spojiti 2 liste - opet idemo na Google - merge 2 arrays javascript (ovaj put na CDN)
*/
const amplitudaSpojenaLista = calcTempAmplitude(spojenaLista);
console.log(spojenaLista);
