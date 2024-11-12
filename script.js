"use strict";
const userName = document.querySelector("#username");
const userPasswd = document.querySelector("#password");
const button = document.querySelector("#button-login");
const message = document.querySelector("#message");
let user = "admin";
let password = "123456";

function positive(username, passwd) {
  return new Promise((resolve, reject) => {
    if (username === user && passwd === password) {
      resolve("togri login");
    } else {
      reject("parol yoki user hato ");
    }
  });
}

button.addEventListener("click", () => {
  const creatUser = userName.value;
  const creaPasswd = userPasswd.value;

  setTimeout(() => {
    positive(creatUser, creaPasswd)
      .then((successMessage) => {
        message.textContent = successMessage;
        message.style.color = "green";

        window.location.href = "./menu.html";
      })
      .catch((errorMessage) => {
        message.textContent = errorMessage;
        message.style.color = "red";
        userName.value = "";
        userPasswd.value = "";
      });
  }, 1000);
});
