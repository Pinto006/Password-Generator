//Variables
var number = [0,1,2,3,4,5,6,7,8,9];
var symbol = ["!", "@", "#", "$", "%", "&", "*", "?"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choice = [];
var finalpass = "";
var characterLength = 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Start function 'writePassword' when button is clicked. 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var criteria = prompts();
if (!criteria) {
  return 
}
  // for loop to randomize the choice array (index; conditional; itterator) {
  //   codeBlock}
   for (var i = 0; i < characterLength; i++) {
    var index = Math.floor(Math.random() *choice.length);
    finalpass = finalpass + choice[index]
  }

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalpass;

}
// function for prompts once the 'generate password button is clicked'
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


