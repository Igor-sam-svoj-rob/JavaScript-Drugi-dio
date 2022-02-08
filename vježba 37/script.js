"use strict";

//Krećemo sa prvim elementom / bojom
let index = 0;

function promijeniBoju() {
  const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];

  document.body.style.background = boje[index++];

  //Moramo napraviti rješenje kada dođemo do zadnjeg elementa

  if (index > boje.length - 1) index = 0;
}
