let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Function that generates random password and returns the password string
 * Parameter[in]   passwordLength - holds the user specified length
 * Parameter[in]   charType       - holds the character types selected by the user
 */
function generatePassword(passwordLength, charType) {
  let returnVal = "";
  for (let i = 0, n = charType.length; i < passwordLength; ++i) {
    // Generate random integers between 0 and n.Then the integers are used as index into the
    // character types string chosen by the user
    returnVal += charType.charAt(Math.floor(Math.random() * n));
  }
  return returnVal;
}

/* Main function that accepts the following input arguments from user
 * 1. Password Length as prompt
 * 2. lower case character type as confirm
 * 3. upper case character type as confirm
 * 4. Numerals as confirm
 * 5. Special character type as confirm
 *
 * Validates the input arguments and generates password to be displayed in the Box
 */
function writePassword() {
  let text = ""; //variable that holds the text messages to be displayed to the user
  let charNum = 0; //holds the number of character types chosen by the user
  let charType = ""; //holds the input character type selected by the user
  let flag = true; // flag to indicate if we are good to proceed with password generation
  /* default string to be displayed if input validation failed.
   * will be updated with generated password when all the criteria are matched
   */
  let GeneratedPassword = "No Password Generated";

  let passwordLength = prompt(
    "Please enter length of password between 8 and 128 characters"
  );

  //if cancel was pressed or empty string given
  if (passwordLength === null || passwordLength === "") {
    //shows alert to the user
    alert("passwordLength not given!! Cannot generate password");
    flag = false; //clear the flag since no password length given
  } else {
    //OK pressed after entering a value
    //check if password length is atleast 8 and no more than 128
    if (Number(passwordLength) >= 8 && Number(passwordLength) <= 128) {
      text = "Password of length " + passwordLength + " would be generated\n";

      let lowerCase = confirm(
        "Include lowercase letters (abcdefghijklmnopqrstuvwxyz)?"
      );

      if (lowerCase === false) {
        text = text + "Lowercase letter not included\n";
      } else {
        charNum++;
        charType = charType + "abcdefghijklmnopqrstuvwxyz";
        text = text + "Lowercase letters included\n";
      }

      let upperCase = confirm(
        "Include uppercase letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?"
      );

      if (upperCase === false) {
        text = text + "Uppercase letter not included\n";
      } else {
        charNum++;
        charType = charType + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        text = text + "Uppercase letters included\n";
      }

      let numbers = confirm("Include numbers (0123456789)?");

      if (numbers === false) {
        text = text + "Numbers not included\n";
      } else {
        charNum++;
        charType = charType + "0123456789";
        text = text + "Numbers included\n";
      }

      let specialCharacters = confirm(
        "Include special characters (!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~)?"
      );

      if (specialCharacters === false) {
        text = text + "Special Characters not included\n";
      } else {
        charNum++;
        charType = charType + "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        text = text + "Special Characters included\n";
      }

      if (charNum === 0) {
        alert(
          "No characters selected! Atleast one is required for password generation"
        );
        flag = false; //clear the flag since no character type was selected
      }

      if (flag === true) {
        text = text + "\nProceed with Password Generation?\n";
        // present final confirmation message to user before calling generatepassword function
        if (confirm(text)) {
          GeneratedPassword = generatePassword(passwordLength, charType);
        }
      }
    } else {
      //shows alert to the user
      alert("Invalid password length given!! Cannot generate password");
    }
  }
  let passwordText = document.querySelector("#password");
  passwordText.value = GeneratedPassword; // Write password to the #password input
}
