// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Intro confirmation, begins generate password function
  var passStart = confirm("Would you like to create a password?");
  if (passStart == true) {

  
  //Prompt for password length, must be more than 8 characters
  var passwordLength = prompt("How many characters would you like to have?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your Password must have at least 8 and no more than 128 characters");
  } else {
    alert("Your password will be " + passwordLength + " characters long!");
  };
  
  // Password final variables, empty string to include / add other variable choices
  var passwordFinal = ""
  
  var upperCase = confirm("Would you like to use uppercase letters?");
  if (upperCase == true) {
    passwordFinal = passwordFinal + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };

  var lowerCase = confirm("Would you like to include lower case characters?")
  if (lowerCase == true) {
    passwordFinal = passwordFinal + "abcdefghijklmnopqrstuvwxyz";
  };
  
  var numberChoice = confirm("Would you like to include numbers?")
  if (numberChoice == true) {
    passwordFinal = passwordFinal + "0123456789"
  };

   var specialChoice = confirm("Would you like to include special characters?")
  if (specialChoice == true) {
    passwordFinal = passwordFinal + "!@#$%"
  };

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * passwordFinal.length);
  password += passwordFinal[randomIndex]; 
  }

  return password; 
}};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
// upperCase.charAt(1)
// passwordFinal.charAt(Math.floor(Math.random()*passwordFinal.length))
