"use strict";

let data = [
  {
    name: "Marko",
    age: "30",
  },
  {
    name: "Luka",
    age: "32",
  },
  {
    name: "Ivan",
    age: "24",
  },
  {
    name: "Stjepan",
    age: "33",
  },
  {
    name: "Domagoj",
    age: "22",
  },
  {
    name: "Kristijan",
    age: "25",
  },
];

const info = document.querySelector("#info");

let lista = data.map(function (item) {
  // return "<div>" + item.name + " ima " + item.age + " godina" + "</div>";
  return `<div>${item.name} ima ${item.age} godina</div>`;
});

info.innerHTML = lista.join("");
