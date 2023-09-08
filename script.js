var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()"

function generatePassword() {
  var charLength = prompt("Enter the amount of characters you want to use for your password. (Length of at least 8 characters, and no more than 128 characters.)")
  if (charLength <= 7) {
    return alert("Must have more than 8 characters.")
  } else if (charLength >= 129) {
    return alert("Must have no more than 128 characters.")
  } else if (isNaN(charLength) == true) {
    return alert("Must type a number.")
  }

  var useLowercase = confirm("Do you want lowercase letters in your password?")
  var useUppercase = confirm("Do you want to use uppercase letters in your password?")
  var useNumbers = confirm("Do you want to use numbers in your password?")
  var useSymbols = confirm("Do you want to use symbols in your password?")

  var noneSelected = useLowercase, useUppercase, useNumbers, useSymbols

  function randomLowercase() {
    return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
  }
  function randomUppercase() {
    return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
  }
    function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
  }
  function randomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
  }


  if (noneSelected != true) {
    return alert("Must have at least 1 character type.")
  }
}