var number = [0,1,2,3,4,5,6,7,8,9];
var symbol = ["!", "@", "#", "$", "%", "&", "*", "?"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterLength = 8;
var choice = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("You clicked the button") // remove later

  return "Generated password will appear here"
}

function prompts() {
  characterLength = parseInt(prompt("Please choose a number between 8 - 128 to decide on the length of your password"));
  if (characterLength < 8 || characterLength > 128) {
    alert("Please try again! This must be between 8 - 128"); 
    return false;
  }
  if (confirm("Would you like to include numbers?")) {
    choice = choice.concat(number);
  }
  if (confirm("Would you like to include special characters?")) {
    choice = choice.concat(symbol);
  }
  if (confirm("Would you like to include lowercase letters?")) {
    choice = choice.concat(lowerLetters);
  }
  if (confirm("Would you like to include uppercase letters?")) {
    choice = choice.concat(upperLetters);
  }
  return true;
}

// Prompt user with password criteria - DONE
//   password length 8-128 - DONE
//   lowercase, uppercase, special character, and numbers - DONE
// Validate the input
// generate a password

//Password generates in the pasword window

