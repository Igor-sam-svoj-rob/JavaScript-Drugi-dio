"use strict";

//Ajmo sada probat dohvatiti godinu rođenja direktno iz objekta, bez da unosimo parametre...
/* Prvo ovo zakomentirano odradite
const igor = {
    firstName: 'Igor',
    lastName: 'Jevremović',
    godinaRođenja: 1983,
    zanimanje: 'SamSvojRob',
    prijatelji: ['Marko', 'Luka', 'Ivan'],
    vozackaDozvola: true,
// pozovimo godinaRođenja iz objekta ključnom riječi this. Za nju je bitno TKO ju je pozvao. 
//U ovom slučaju ju zove objekt igor
    starost: function(){
        console.log(this);
        return 2022 - this.godinaRođenja;
    }
};
console.log(igor.starost());
//recimo da ovu vrijednost moramo pozivati više puta kroz program
//u toj situaciji moramo mijenjati izgled funkcije starost kako bi smanjili opterećenje
//kalkulacija, jer kalkulacija može biti kompleksna
console.log(igor.starost());
console.log(igor.starost());
console.log(igor.starost());

//Glavno pitanje, zašto uopće koristimo this a ne ime glavne varijable (igor) s obzirom
// ćemo dobiti isti rezultat. Zato što se može dogoditi da mijenjamo ime glavne varijable
i onda kršimo princip DRY */

//KADA OVO ISPOD DOVRŠIŠ TO JE NAJOPTIMALNIJI KOD
const igor = {
  firstName: "Igor",
  lastName: "Jevremović",
  godinaRođenja: 1983,
  zanimanje: "SamSvojRob",
  prijatelji: ["Marko", "Luka", "Ivan"],
  vozackaDozvola: true,
  starost: function () {
    this.dob = 2022 - this.godinaRođenja;
    return this.dob;
  },
};

console.log(igor.starost());
console.log(igor.starost());
console.log(igor.starost());
console.log(igor.starost());
/* VAŽNO - dok god ne pozovemo OBJECT METHOD funkciju vrijednost starost nije
te neće postojati. Tek onda će kod odvriti funkciju. Zato što ona nije originalna vrijednost objekta. 
Možemo ju pozvati (pokrenuti da se izvrti) sa igor.starost(); (kako se inače i radi)
umjesto console.log(igor.starost()); */

console.log(igor.dob);
