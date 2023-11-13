// Assignment code here
console.log('I am linked');

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
//SECTION----password length is correct----------------
var lengthPass = window.prompt(
  'How long should your password be? Must be at least 8 but no more than 128 characters long'
);
//make sure is a number and correct length//
if (isNaN(lengthPass) || lengthPass < 8 || lengthPass > 128) {
  alert('Please enter a numbert between 8 and 128');
} else {
  console.log(`This is the length: ${lengthPass}`);
}
var numberPrompt = window.confirm(
  'Do you want to include numbers in your password?'
);
//SECTION-------number---------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Add empty array to store random numbers
var randomNums = []; //this holds array of numbers selected
//genrerate random numbers and push into array
for (var i = 0; i < lengthPass; i++) {
  var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  randomNums.push(randomNum);
}
console.log(`Random numbers array`, randomNums);

//characters------------------------
var charPrompt = window.confirm(
  'Do you want to include special characters in your password?'
);

var charList = '!#$%&()*+-/:;<=>?@[]^_{|}~';
//this holds strings of characters selected
var randomCharString = '';
// Generate random characters and append them to the password string
for (var i = 0; i < lengthPass; i++) {
  var randomChar = charList[Math.floor(Math.random() * charList.length)];
  randomCharString += randomChar;
}

console.log(`Random Characters string:`, randomCharString);
//letters--------------------------------
var alphaPrompt = window.confirm(
  'Do you want to include letters in your password?'
);
var alphabet = 'abcdefghijklmnipqrstuvwxyz';
var randomAlphaString = '';

for (i = 0; i < lengthPass; i++) {
  var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomAlphaString += randomAlphabet;
}
console.log(`Random Alphabet string:`, randomAlphaString);

//NOTEBelow are my variables as functions
// //SECTION Random Numbers
// var randomNums = function () {
//   var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
//   return randomNum;
// };
// console.log(randomNums());

//SECTION Random Characters
// var randomChars = function () {
//   var charList = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
//   var randomChar = charList[Math.floor(Math.random() * charList.length)];
//   return randomChar;
// };
// console.log(randomChars());
//SECTION Random ALPHAbet-alpha is function and others are variables just to test
var randomString = function () {
  var alphabet = 'abcdefghijklmnipqrstuvwxyz';
  var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomAlphabet;
};
// console.log(randomString());

//IMPORTANT ORIGINAL CODE ------------------
// // the writePassword() function generates a password using the generatePassword() function, selects the HTML element with the ID password, and updates its value with the generated password.
var generatePassword = function () {
  if (numberPrompt == true) {
    console.log(`These are the final random numbers${randomNums} `);
  } else {
    console.log('no numbers');
  }
  if (charPrompt == true) {
    console.log(`These are the final random characters ${randomCharString}`);
  } else {
    console.log('no characters');
  }
  // var lengthPass = window.prompt(
  //   'How long should your password be? Must be at least 8 but no more than 128 characters long'
  // );
  // console.log(`this is the length ${lengthPass}`);
  // var numberPrompt = window.confirm(
  //   'Do you want to include numbers in your password?'
  // );
  // if (numberPrompt == true) {
  //   var randomNums = function () {
  //     var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //     var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  //     return randomNum;
  //   };
  //   randomNums();
  //   console.log('yes to numbers');
  // } else {
  //   console.log('no numbers');
  // }
};
generatePassword();

function writePassword() {
  // var password will store random password created by generatePassword
  var password = generatePassword();

  return password;
}

//   var passwordText = document.querySelector('#password');
//   passwordText.value = password;
// }
// writePassword();
// console.log(writePassword);

//IMPORTANT ORIGINAL CODE ------
// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
//replace function() with writePassword function
generateBtn.addEventListener('click', function () {
  // var start = window.confirm('Do you want a new Password?');

  // if (start == true) {
  //   var lengthPass = window.prompt(
  //     'How long should your password be? Must be at least 8 but no more than 128 characters long'
  //   );
  //   console.log(`this is the length ${lengthPass}`);

  //  return lengthPass;
  // }
  //SECTION-------number---------------------------------
  // var numberPrompt = window.confirm(
  //   'Do you want to include numbers in your password?'
  // );
  // if (numberPrompt == true) {
  //   var randomNums = function () {
  //     var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //     var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  //     return randomNum;
  //   };
  //   console.log(randomNums(lengthPass));
  //   console.log('yes to numbers');
  // } else {
  //   console.log('no numbers');
  // }
  //SECTION-------characters---------------------------------
  // var charPrompt = window.confirm(
  //   'Do you want to include special characters in your password?'
  // );
  // if (charPrompt == true) {
  //   console.log('yes to characters');
  // } else {
  //   console.log('no characters');
  // }

  //SECTION-------alphabet---------------------------------
  var alphaPrompt = window.confirm(
    'Do you want to include letters in your password?'
  );
  if (alphaPrompt == true) {
    console.log('yes to alphabet');
    var upperCase = window.confirm('include upper case?');
    if (upperCase == true) {
      console.log('yes uppercase');
    } else {
      console.log('no uppercase');
    }
    var lowerCase = window.confirm('include lower case?');
    if (lowerCase == true) {
      console.log('yes lower case');
    } else {
      console.log('no lower case');
    }
  } else {
    console.log('dont include letters');
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
