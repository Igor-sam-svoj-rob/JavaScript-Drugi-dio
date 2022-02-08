"use strict";

let userInput = document.getElementById("userInput");

let expression = "";

/* kada nešto uđe u funkciju onclick, to spremamo u parametar num, i onda taj num dodajemo
u našu varijablu expression. Pa čak i ako ide matematički operator*/
function press(num) {
  expression += num;
  userInput.value = expression; //a onda se to što ukucamo u expression pokazati na input polju
}

//Funkcija za jednako gumb (Eval funkcija računa)
function equal() {
  userInput.value = eval(expression);
}

function erase() {
  expression = "";
  userInput.value = expression;
}
