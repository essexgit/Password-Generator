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
// Displays a password

// Function to generate password with user input
function generatePassword() {
  console.log('Button works');
  getLength();
}

// Asks user for password criteria
function getPasswordOptions() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector('#password');

  // passwordText.value = "test";
  passwordText.value = password;
}

// PWOptions object

let PWOptions = {
  length: 0,
  numbers: false,
  special: false,
  lower: false,
  upper: false,
  oneType: 0
};

console.log(PWOptions.length);

// Asks for length of password
function getLength() {
  let passLength = prompt('Enter a password length between 10 and 64 characters');
  if (passLength > 9 && passLength < 65) {
    PWOptions.length = passLength;
    console.log(PWOptions.length);
    confirmNumbers();
  } getLength();
}

// Asks if numbers are to be included
function confirmNumbers() {
  if (confirm('Do you want numbers (3,7,6) in your password?')) {
    PWOptions.numbers = true;
    PWOptions.oneType++;
    console.log(PWOptions.oneType);
  } confirmSpecial();
}
// Asks if special characters are to be included
function confirmSpecial() {
  if (confirm('Do you want special characters ({,],/) in your password?')
  ) {
    PWOptions.special = true;
    PWOptions.oneType++;
    console.log(PWOptions.oneType);

  } confirmLower();
}

// Asks if lowercase characters are to be included
function confirmLower() {
  if (confirm('Do you want lowercase characters (w,f,g) in your password?')
  ) {
    PWOptions.lower = true;
    PWOptions.oneType++;
    console.log(PWOptions.oneType);

  } confirmUpper();
}
// Asks if uppercase characters are to be included
function confirmUpper() {
  if (confirm('Do you want uppercase characters (S,T,P) in your password?')
  ) {
    PWOptions.upper = true;
    PWOptions.oneType++;
    console.log(PWOptions.oneType);

  } checkSelections();
}

function checkSelections() {
  if (PWOptions.oneType > 0) {
    return getRandom(specialCharacters);
  } else {
    alert("You must pick at least one character type for a password to generate");
    return confirmNumbers();
  }

}
// Populate array with random characters selected from character array
let characterArray = [];
// Create character array from selections by user
// Function for getting a random element from an array
function getRandom(arr) {
  console.log(arr);
}

// build characterArray

function buildArray() {
  if (PWOptions.numbers) {
    characterArray.concat(PWOptions.numbers);
  }

}