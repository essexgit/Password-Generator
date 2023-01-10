// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Pseudo code

// Function to prompt user for password options
function getPasswordOptions() {

}

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
function generatePassword() {
  PWOptions = {
    length: 0,
    numbers: false,
    special: false,
    lower: false,
    upper: false,
    oneType: 0,
    finalPass: ''
  };
  getLength();
  return PWOptions.finalPass;

  // else {
  //   return PWOptions.finalPass;
  // }
}

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
// PWOptions object

// options object
let PWOptions = {
  length: 0,
  numbers: false,
  special: false,
  lower: false,
  upper: false,
  oneType: 0,
  finalPass: ''
};

// Length? and Check
function getLength() {
  let passLength = prompt('Enter a password length between 10 and 64 characters');
  if (passLength > 9 && passLength < 65) {
    PWOptions.length = passLength;
    confirmNumbers();
  } else { getLength(); };
}

// Numbers?
function confirmNumbers() {
  if (confirm('Do you want numbers (3,7,6) in your password?')) {
    PWOptions.numbers = true;
    PWOptions.oneType++;

  }
  confirmSpecial();
}
// Special Characters?
function confirmSpecial() {
  if (confirm('Do you want special characters ({,],/) in your password?')
  ) {
    PWOptions.special = true;
    PWOptions.oneType++;

  }
  confirmLower();
}

// LowerCase?
function confirmLower() {
  if (confirm('Do you want lowercase characters (w,f,g) in your password?')
  ) {
    PWOptions.lower = true;
    PWOptions.oneType++;

  }
  confirmUpper();
}
// Uppercased
function confirmUpper() {
  if (confirm('Do you want uppercase characters (S,T,P) in your password?')
  ) {
    PWOptions.upper = true;
    PWOptions.oneType++;

  }
  checkSelections();
}

function checkSelections() {
  console.log(PWOptions.oneType);
  if (PWOptions.oneType > 0) {
    buildArray();
  } else {
    alert("You must pick at least one character type for a password to generate");
    return confirmNumbers();
  }
}
// Populate array with random characters selected from character array
// each time produce random integer between 0 and characterArray.length

function producePassword(passwordArray, characterArray) {
  // let arrayedPassword = [];
  for (let i = PWOptions.oneType; i < passwordArray.length; i++) {
    // arrayedPassword.push(characterArray[passwordArray[i]]);
    PWOptions.finalPass += characterArray[passwordArray[i]];
  }
  // PWOptions.finalPass = arrayedPassword.join('');
  console.log(PWOptions.finalPass);
}
//loop through passwordArray using values as positions in characterArray to make password

// Function for getting a random element from an array
// create password by looping PWOptions.length times
function getRandom(arr) {
  let passwordArray = [];
  for (let i = PWOptions.oneType; i < PWOptions.length; i++) {
    passwordArray[i] = Math.floor(Math.random() * arr.length);
  }
  producePassword(passwordArray, arr);
}

// build characterArray

function buildArray() {
  let characterArray = [];
  if (PWOptions.numbers) {
    characterArray = characterArray.concat(numericCharacters);
    PWOptions.finalPass += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }
  if (PWOptions.special) {
    characterArray = characterArray.concat(specialCharacters);
    PWOptions.finalPass += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  if (PWOptions.lower) {
    characterArray = characterArray.concat(lowerCasedCharacters);
    PWOptions.finalPass += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  }
  if (PWOptions.upper) {
    characterArray = characterArray.concat(upperCasedCharacters);
    PWOptions.finalPass += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  }
  console.log(PWOptions.finalPass);
  getRandom(characterArray);
}