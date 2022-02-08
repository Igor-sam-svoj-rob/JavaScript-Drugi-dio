"use strict";

const messageInput = document.getElementById("message-input");

//moramo još dodati event listener za tipkovnicu
messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getMessage();
  }
});

function getMessage() {
  document.getElementById("message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}
