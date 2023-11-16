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
  prompt('Please enter a numbert between 8 and 128');
} else {
  console.log(`This is the length: ${lengthPass}`);
}

//SECTION-------number---------------------------------
var numberPrompt = window.confirm(
  'Do you want to include numbers in your password?'
);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Add empty array to store random numbers
var randomNums = [];
//this holds array of numbers selected
//genrerate random numbers and push into array
for (var i = 0; i < lengthPass; i++) {
  var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  randomNums.push(randomNum);
}
console.log(`Random numbers array`, randomNums.join(''));

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
//UPPERcase letters------------------------
var alphaUpperPrompt = window.confirm(
  'Do you want to include upper case letters in your password?'
);
var upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomUpperCaseString = '';

for (i = 0; i < lengthPass; i++) {
  var randomUpper =
    upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
  randomUpperCaseString += randomUpper;
}
console.log(`Random UPPER case Alphabet string:`, randomUpperCaseString);

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
// var randomString = function () {
//   var alphabet = 'abcdefghijklmnipqrstuvwxyz';
//   var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
//   return randomAlphabet;
// };
// console.log(randomString());

//IMPORTANT ORIGINAL CODE ------------------
// // the writePassword() function generates a password using the generatePassword() function, selects the HTML element with the ID password, and updates its value with the generated password.

var generatePassword = function () {
  var emptyPassArray = [];

  if (numberPrompt == true) {
    emptyPassArray.push(randomNums.join(''));
    // console.log(`These are the final random numbers${randomNums} `);
  } else {
    console.log('no numbers');
  }
  if (charPrompt == true) {
    emptyPassArray.push(randomCharString);
    // console.log(`These are the final random characters ${randomCharString}`);
  } else {
    console.log('no characters');
  }

  if (alphaPrompt === true) {
    emptyPassArray.push(randomAlphaString);
  }
  if (alphaPrompt === true && alphaUpperPrompt === true) {
    emptyPassArray.push(randomUpperCaseString);
  }
  if (alphaPrompt !== true) {
    console.log('no letters');
  }
  //join all arrays into one string
  var joinedArray = emptyPassArray.join('');
  console.log(`Generated Password = ${joinedArray}`);
  console.log(typeof randomNums, typeof emptyPassArray, typeof joinedArray);
  //make string into an array
  var myArray = joinedArray.split('');
  console.log(`this is the password array:`, myArray);

  //shufle my array
  myArray;
  //Fisher-Yates shuffle algorithm found at nobledesktop.com
  //----------------------------------------------------
  // 1-set up a loop that iterates the array
  for (let i = 0; i < myArray.length; i++) {
    //2-save the current item to to a temp variable
    let temp = myArray[i];
    //3-generate a random number in the range of the array
    let r = Math.floor(Math.random() * myArray.length);
    //4-get the item at the random index and ..
    //5-raplace the current item with the random item
    myArray[i] = myArray[r];
    //6-replace the random item with the current item as temp
    myArray[r] = temp;
    // return myArray;
  }
  // join the elements of myArray into a string
  myArray = myArray.join('');
  //UCB Xpert Learning Assistant helped here
  // check if myArray length is equal to lengthPass
  if (myArray.length < lengthPass) {
    // add additional elements to myArray until it reaches the desired length
    var additionalElements = lengthPass - myArray.length;
    for (var i = 0; i < additionalElements; i++) {
      myArray.push(undefined);
    }
  } else if (myArray.length > lengthPass) {
    // remove extra elements from myArray until it reaches the desired length
    myArray = myArray.slice(0, lengthPass);
  }
  console.log(myArray);
};
generatePassword();

// function writePassword() {
//   // var password will store random password created by generatePassword
//   var password = generatePassword();

//   return password;
// }

//   var passwordText = document.querySelector('#password');
//   passwordText.value = password;
// }
// writePassword();
// console.log(writePassword);

//IMPORTANT ORIGINAL CODE ------
//Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// replace function() with writePassword function
generateBtn.addEventListener('click', function ()
// {
  // var start = window.confirm('Do you want a new Password?');

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
//   var alphaPrompt = window.confirm(
//     'Do you want to include letters in your password?'
//   );
//   if (alphaPrompt == true) {
//     console.log('yes to alphabet');
//     var upperCase = window.confirm('include upper case?');
//     if (upperCase == true) {
//       console.log('yes uppercase');
//     } else {
//       console.log('no uppercase');
//     }
//   } else {
//     console.log('dont include letters');
//   }
// });

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

