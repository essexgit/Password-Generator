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

// Function to prompt user for password options
function getPasswordOptions() {
  confirmNumbers();
  confirmSpecial();
  confirmLower();
  confirmUpper();
  checkSelections();
}

// Function to generate password with user input
function generatePassword() {
  // reset options object
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

// options object
let PWOptions = {
  length: 0,
  numbers: false,
  special: false,
  lower: false,
  upper: false,
  // check how many types have been chosen
  oneType: 0,
  finalPass: ''
};

// Length? and Check
function getLength() {
  let passLength = prompt('Enter a password length between 10 and 64 characters');
  if (passLength > 9 && passLength < 65) {
    PWOptions.length = passLength;
    getPasswordOptions();
  } else { getLength(); };
}

// Numbers?
function confirmNumbers() {
  if (confirm('Do you want numbers (3,7,6) in your password?')) {
    PWOptions.numbers = true;
    PWOptions.oneType++;

  }
}
// Special Characters?
function confirmSpecial() {
  if (confirm('Do you want special characters ({,],/) in your password?')
  ) {
    PWOptions.special = true;
    PWOptions.oneType++;
  }
}

// LowerCase?
function confirmLower() {
  if (confirm('Do you want lowercase characters (w,f,g) in your password?')
  ) {
    PWOptions.lower = true;
    PWOptions.oneType++;
  }
}
// Uppercased
function confirmUpper() {
  if (confirm('Do you want uppercase characters (S,T,P) in your password?')
  ) {
    PWOptions.upper = true;
    PWOptions.oneType++;
  }
}

function checkSelections() {
  if (PWOptions.oneType > 0) {
    buildArray();
  } else {
    alert("You must pick at least one character type for a password to generate");
    return getPasswordOptions();
  }
}
// Populate array with random characters selected from character array
// each time produce random integer between 0 and characterArray.length

function producePassword(arr) {
  let passwordArray = [];
  for (let i = PWOptions.oneType; i < PWOptions.length; i++) {
    // build array of random numbers
    passwordArray[i] = Math.floor(Math.random() * arr.length);
    // use random array to create password from available characters
    PWOptions.finalPass += arr[passwordArray[i]];
  }
}

// build characterArray, concat each chosen type
//add at least 1 of each type to final array
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
  producePassword(characterArray);
}