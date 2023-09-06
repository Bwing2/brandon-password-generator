// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()"

function generatePassword() {
  var charLength = prompt("Enter the amount of characters you want to use for your password. (Length of at least 8 characters, and no more than 128 characters.)")
  if (charLength < 8) {
    alert("Must have more than 8 characters.")
    return
  }
}