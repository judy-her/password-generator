// Assignment code here
console.log('I am linked');

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

//SECTION Random ALPHAbet-alpha is function and others are variables just to test
var randomString = function () {
  var alphabet = 'abcdefghijklmnipqrstuvwxyz';
  var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomAlphabet;
};
console.log(randomString());

//SECTION Random Numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
console.log(randomNum);

//SECTION Random Characters
var charList = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
var randomChar = charList[Math.floor(Math.random() * charList.length)];
console.log(randomChar);

//IMPORTANT ORIGINAL CODE ------------------
// the writePassword() function generates a password using the generatePassword() function, selects the HTML element with the ID password, and updates its value with the generated password.
function writePassword() {
  // var password will store random password created by generatePassword
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
writePassword();
console.log(writePassword);
// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
//replace function() with writePassword function
generateBtn.addEventListener('click', function () {
  var start = window.confirm('Do you want a new Password?');
  if (start == true) {
    window.prompt('How long should your password be? Must be at least 8');
  }
});

//NOTE MY original function, keep for reference
// document.querySelector('#generate').addEventListener('click', function () {
//   alert("Let's generate your passord");
// });

//TODO
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts
//1-maybe event.listerner on click here
//TODO
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//1-This window should have choices for password
// 1-prompt-do you want a password?
// 2-how long should password be? 8-128
// 3-

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
