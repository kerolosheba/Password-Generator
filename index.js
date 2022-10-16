const charactersAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
 "/"]

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const charactersNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const charactersSymboles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
 "/"]

const numbers = document.querySelector('#Numbers')
const symboles = document.querySelector('#Symboles')

let passwordEl = document.getElementById("password-el")
let copiedEl = document.getElementById("copied-el")

let lengthEl = document.getElementById("length-el")

function generatePassword() {
 passwordEl.textContent = ""
 copiedEl.textContent = ""
 if (numbers.checked === false && symboles.checked === false) {
  for (let i = 0; i < lengthEl.valueAsNumber; i++) {
   passwordEl.textContent += characters[Math.floor(Math.random()*characters.length)]
  }
 } else if (numbers.checked === true && symboles.checked === false) {
  for (let i = 0; i < lengthEl.valueAsNumber; i++) {
   passwordEl.textContent += charactersNumbers[Math.floor(Math.random() * charactersNumbers.length)]
  }
 } else if (numbers.checked === false && symboles.checked === true) {
  for (let i = 0; i < lengthEl.valueAsNumber; i++) {
   passwordEl.textContent += charactersSymboles[Math.floor(Math.random() * charactersSymboles.length)]
  }
 } else {
  for (let i = 0; i < lengthEl.valueAsNumber; i++) {
   passwordEl.textContent += charactersAll[Math.floor(Math.random() * charactersAll.length)]
  }
 }
}

passwordEl.onclick = function () {
 document.execCommand("copy");
 copiedEl.textContent = "Password Copied Successfully"
}

passwordEl.addEventListener("copy", function (event) {
 event.preventDefault();
 if (event.clipboardData) {
  event.clipboardData.setData("text/plain", passwordEl.textContent);
  console.log(event.clipboardData.getData("text"))
 }
});