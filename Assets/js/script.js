// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Intro confirmation, begins generate password function
  var passStart = confirm("Would you like to create a randomized password?");
  if (passStart == true) {
    //Prompt for password length, must be more than 8 characters
    var passwordLength = prompt("How many characters would you like to have?");
    if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Your Password must have at least 8 and no more than 128 characters"
      );
      // Loop Password Generate Function if password length <8 and > 127
      return generatePassword();
    } else {
      alert(
        "Your password will be " + passwordLength + " characters in total!"
      );
    }

    // Password final variables, empty string to include variable choices as function progresses
    var passwordFinal = "";

    var upperCase = confirm("Would you like to use uppercase letters?");
    if (upperCase == true) {
      passwordFinal = passwordFinal + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      alert("Your password will include uppercase letters!");
    } else {
      alert("Your password will NOT include uppercase letters!");
    }
    var lowerCase = confirm("Would you like to include lower case characters?");
    if (lowerCase == true) {
      passwordFinal = passwordFinal + "abcdefghijklmnopqrstuvwxyz";
      alert("Your password will include lowercase letters!");
    } else {
      alert("Your password will NOT include lowercase letters!");
    }
    var numberChoice = confirm("Would you like to include numbers?");
    if (numberChoice == true) {
      passwordFinal = passwordFinal + "0123456789";
      alert("Your password will include numbers!");
    } else {
      alert("Your password will NOT include numbers!");
    }

    var specialChoice = confirm(
      "Would you like to include special characters?"
    );
    if (specialChoice == true) {
      passwordFinal = passwordFinal + "~'!@#$%^&*()-_+={}[]:;.<>?/`";
      alert("Your password will include special characters!");
    } else {
      alert("Your password will NOT include special characters!");
    }

    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordFinal.length);
      password += passwordFinal[randomIndex];
    }

    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Notes
// upperCase.charAt(1)
// passwordFinal.charAt(Math.floor(Math.random()*passwordFinal.length))
