console.log('script 2 is linked');
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

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Add empty array to store random numbers
var randomNums = []; //this holds array of numbers selected

//genrerate random numbers and push intoarray
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

//generatePASSWORD function
var generatePassword = function () {
  var emptyPassArray = [];

  if (numberPrompt == true) {
    emptyPassArray.push(randomNums);
  } else {
    console.log('no numbers');
  }
  if (charPrompt == true) {
    emptyPassArray.push(randomCharString);
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

  var joinedArray = emptyPassArray.join('');
  console.log(`Generated Password = ${joinedArray}`);
};

generatePassword();

//genrerate random numbers and push into string

//geerate random numbers and push intoarray
// for (var i = 0; i < lengthPass; i++) {
//   var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
//   randomNums.push(randomNum);
// }
// console.log(`Random numbers array`, randomNums.join(''))
