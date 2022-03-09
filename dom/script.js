'use strict';
const check = document.querySelector(".check")
const again = document.querySelector(".again")
const highscore = document.querySelector(".highscore")
const number = document.querySelector(".number")
const message = document.querySelector(".message")

const corrNumber = Math.floor(Math.random() * 20)
console.log(corrNumber);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message
}
check.addEventListener('click', function () {
  const guess = Number(document.querySelector(".guess").value)
  console.log(guess)
  if (guess === corrNumber) {
    console.log("benar")
    displayMessage('benar')
    document.querySelector(".number").textContent = `${corrNumber}`
    document.querySelector("body").style.background = "green"
  } else if (guess <= corrNumber) {
    console.log("kurang")
    displayMessage('kurang')
  } else if (guess > corrNumber) {
    console.log("lebih")
    displayMessage('lebih')
  } else {
    console.log("inputan tidak valid")
  }
})
