"use strict";

//idemo napraviti 2 object methoda i pozvati prvu metodu u izvršavanju druge metode
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

  zadatak: function () {
    return `${this.firstName} je ${this.starost()}-godišnji ${
      igor.zanimanje
    } i ${igor.vozackaDozvola ? "ima" : "nema"} vozačku dozvolu`;
  },
};

console.log(igor.starost());

console.log(igor.dob);

console.log(igor.zadatak());
