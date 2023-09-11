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

// All variables for different letters, numbers and symbols as strings
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()"

// Entire function that is stored in the password variable
function generatePassword() {
  
  // Prompt stored in charLength variable for character length
  var charLength = prompt("Enter the amount of characters you want to use for your password. (Length of at least 8 characters, and no more than 128 characters.)")

  // if statement to determine alert displayed if number of characters is less than 8 and greater than 128
  if (charLength < 8 || charLength > 128) {
    return alert("Must have more than 8 characters, and less than 128 characters.")

  // if the charLength variable is not a number (true == true) restarts generate password function
  } else if (isNaN(charLength) == true) {
    return alert("Must type a number.")
  }

  // All confirm prompts stored in their respective variables
  var useLowercase = confirm("Do you want lowercase letters in your password?")
  var useUppercase = confirm("Do you want to use uppercase letters in your password?")
  var useNumbers = confirm("Do you want to use numbers in your password?")
  var useSymbols = confirm("Do you want to use symbols in your password?")

  // if no variables are selected alert is displayed and restarts generate password function
  if (useLowercase == false && useUppercase == false && useNumbers == false && useSymbols == false) {
  return alert("Must have at least 1 character type.")
  }

  // All functions for random letters, numbers, and symbols
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

  // Stores password in empty string
  var passwordSelected = ""

  // for loop adding + 1 for whichever functions that were chosen letters, numbers, and symbols in order until it hits charLength
  for (var i = 0; i <= charLength; i++) {
    if (useLowercase) {
      passwordSelected += randomLowercase()
    }
    if (useUppercase) {
      passwordSelected += randomUppercase()
    }
    if (useNumbers) {
      passwordSelected += randomNumber()
    }
    if (useSymbols) {
      passwordSelected += randomSymbol()
    }
  }

  // Slices passwordSelected string from 0 to charLength and stores in finalPassword variable
  var finalPassword = passwordSelected.slice(0, charLength)
  return finalPassword
}

