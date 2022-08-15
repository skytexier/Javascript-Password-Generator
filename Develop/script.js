// Assignment Code
var generateBtn = document.querySelector("#generate");

var startPassword = confirm("Would you like to generate a randomized password?");
var password = prompt("How many characters would you like to have?");
  if (prompt < 6) prompt("Your Password must be longer than 6!");

var password = {
 capitalCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
 lowerCase: "abcdefghijklmnopqrstuvwxyz",
 specialCharacters: "!@#$%^&*",
 numbers: "1234567890",

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(password);

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

