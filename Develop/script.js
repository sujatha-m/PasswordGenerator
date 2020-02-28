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

let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function generatePassword(passwordLength,charType) {
  let returnVal = "";
  for (let i = 0, n = charType.length; i < passwordLength; ++i) {
      returnVal += charType.charAt(Math.floor(Math.random() * n));
  }
  return returnVal;
}

function writePassword(){

let text = "";
let charNum = 0;
let charType = "";
let flag = true;
let GeneratedPassword = "No Password Generated";

let passwordLength = prompt ("Please enter length of password between 8 and 128 characters");

if(passwordLength === null || passwordLength === ""){
  alert("passwordLength not given!! Cannot generate password");
  flag = false;
} else{
  if((Number(passwordLength) >= 8) && (Number(passwordLength) <= 128)){
    text = "Password of length " + passwordLength + " would be generated";

    let lowerCase = confirm("Include lowercase letters (abcdefghijklmnopqrstuvwxyz)?");

    if(lowerCase === null) {
      text = text + "Lowercase letter not included";
    } else {
      charNum++;
      charType = charType + "abcdefghijklmnopqrstuvwxyz";
      text = text + "Lowercase letters included";
    }

    let upperCase = confirm("Include uppercase letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)?");

    if(upperCase === null) {
      text = text + "Uppercase letter not included";
    } else {
      charNum++;
      charType = charType + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      text = text + "Uppercase letters included";
    }

    let numbers = confirm("Include numbers (0123456789)?");

    if(numbers === null) {
      text = text + "Numbers not included";
    } else {
      charNum++;
      charType = charType + "0123456789";
      text = text + "Numbers included";
    }

    let specialCharacters = confirm("Include special characters (!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)?");

    if (specialCharacters === null) {
      text = text + "Special Characters not included";

    } else {
      charNum++;
      charType = charType + "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      text = text + "Special Characters included";
    }

    if (charNum === 0){
      alert ("No characters selected! Atleast one is required for password generation");
      flag = false
    }

    if(flag === true) {
      text = text + "\nProceed with Password Generation?\n"
       if(confirm(text)) {
          GeneratedPassword = generatePassword(passwordLength,charType);
      }
  }    
 } else {
      alert("Invalid password length given!! Cannot generate password");
  } 
}
  let passwordText = document.querySelector("#password");
  passwordText.value = GeneratedPassword;
}

