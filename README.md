# PasswordGenerator

## Overview 
An application that generates a random password based on the following user-selected criteria:-

1. Password length between 8 and 128 characters
2. Atleast 1 of the following character types selected
   a. Lower case character type
   b. Upper case character type
   c. Numerals character type
   d. Special character type

This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It also features a clean,polished 
and responsive user interface, ensuring that it adapts to multiple screen sizes.

## Functionality
The user clicks on "Generate Password" button to first launch a password length prompt.The password length input is validated and if the criteria is satisfied,each of the character type confirmations are then presented to the user.If atleast 1 character type is selected,then the password generation function is called and the generated password string with selected character types is displayed in the box.
If any of the password generation criteria fails, an alert is displayed to the user with the reason for failure.

The following images demonstrate the application functionality:

![password generator demo](./Assets\1.PasswordLengthPrompt.png)
![password generator demo](./Assets\2.lowercaseconfirmation.png)
![password generator demo](./Assets\3.uppercaseconfirmation.png)
![password generator demo](./Assets\4.Numeralsconfirmation.png)
![password generator demo](./Assets\5.Specialcharactersconfirmation.png)
![password generator demo](./Assets\6.Alloptionsconfirmation.png)
![password generator demo](./Assets\7.PasswordGenerated.png)
![password generator demo](./Assets\8.InvalidPasswordLengthAlert.png)
![password generator demo](./Assets\9.NocharactertypesAlert.png)