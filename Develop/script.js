// Assignment Code

/*let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
let upperCase = prompt ("Include uppercase letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?");
let lowerCase = prompt ("Include lowercase letters (abcdefghijklmnopqrstuvwxyz)?");
let numbers = prompt ("Include numbers (0123456789)?");
let specialCharacters = prompt ("Include special characters (!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)?");



let text = "";
let charNum = 0;
let charType = "";

let passwordLength = prompt ("Please enter length of password between 8 and 128 characters");

if(passwordLength === null || passwordLength === ""){
  alert("passwordLength not given!! Cannot generate password");
  
}else{
  if((Number(passwordLength) >= 8) && (Number(passwordLength) <= 128)){
    text = "Password of length " + passwordLength + " would be generated";

    if(lowerCase === null) {
      text = text + "Lowercase letter not included";
    } else {
      charNum++;
      charType = charType + "abcdefghijklmnopqrstuvwxyz";
      text = text + "Lowercase letters included";
    }

    if(upperCase === null) {
      text = text + "Uppercase letter not included";
    } else {
      charNum++;
      charType = charType + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      text = text + "Uppercase letters included";
    }

    if(numbers === null) {
      text = text + "Numbers not included";
    } else {
      charNum++;
      charType = charType + "0123456789";
      text = text + "Numbers included";
    }

    if (specialCharacters === null) {
      text = text + "Special Characters not included"
    } else {
      charNum++;
      charType = charType + "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      text = text + "Special Characters included";
    }
      
  } 
}

