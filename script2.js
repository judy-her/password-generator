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
// console.log(`Random numbers array`, randomNums);

var generatePassword = function () {
  if (numberPrompt == true) {
    console.log(`${randomNums} are the numbers in password`);
  } else {
    console.log('no numbers');
  }

  //   for (i = 0; i <= lengthPass.length; i++) {
  //     if (numberPrompt == true) {
  //       console.log('this person wants these numbers');
  //     }
  //   }
};
generatePassword();
