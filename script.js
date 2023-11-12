// Assignment code here
console.log('I am linked');

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//TODO
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//1-maybe event.listerner on click here
// a- make sure btn is selected

//TODO
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//1-This window should have choices for password

//TODO
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//-Give option of length between 8-128 characters

//TODO
//WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//IMPORTANT does not matter how MANY of each only that they choose yes or no
//-create a separate list for lc, up, numbers and special characters
//-letters, if true, ask upper or lower, else skip
//-numbers? true/false
//-special charcters? true/false

//TODO
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//test for character types

//TODO
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//test that password is random and matches criteria

//TODO
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//display password in alert or page(maybe querySelector?)
