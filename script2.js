console.log('script 2 is linked');
var lengthPass = window.prompt(
  'How long should your password be? Must be at least 8 but no more than 128 characters long'
);

//make sure is a number and correct length//
if (isNaN(lengthPass) || lengthPass < 8 || lengthPass > 128) {
  prompt('Please enter a numbert between 8 and 128');
} else {
  console.log(`This is the length: ${lengthPass}`);
}
//------numbers----------------------
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
//generatePASSWORD function---------------------
var generatePassword = function () {
  var emptyPassArray = [];

  //   console.log(`Random numbers array`, randomNums.join(''));
  if (numberPrompt == true) {
    emptyPassArray.push(randomNums.join(''));
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
  //join all arrays into one string
  var joinedArray = emptyPassArray.join('');
  console.log(`Generated Password = ${joinedArray}`);
  console.log(typeof randomNums, typeof emptyPassArray, typeof joinedArray);
  //make string into an array
  var myArray = joinedArray.split('');
  console.log(myArray);
  console.log(typeof myArray);

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
  // UCB helped here -join the elements of myArray into a string
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
};
generatePassword();
