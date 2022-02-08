"use strict";
//OBJEKT METODE
const igor = {
  firstName: "Igor",
  lastName: "Jevremović",
  godinaRođenja: 1983,
  zanimanje: "SamSvojRob",
  prijatelji: ["Marko", "Luka", "Ivan"],
  vozackaDozvola: true,
  /* Ne možemo napisati const starost(ispod će te vidjeti funkciju starost), jer ne definiramo varijablu, 
    samo definiramo novu vrijednost  objekta i ovakav način definiranja se zove object method*/
  starost: function (godinaRođenja) {
    //ne možemo spremati starost u varijablu, jer je ona vrijednost objekta
    return 2022 - godinaRođenja; //svaka funkcija koja se veže uz objekt se zove object method
  },
};

//ovo je dot notacija
console.log(igor.starost(1983));
//ovo je bracket notacija
console.log(igor["starost"](1983));
