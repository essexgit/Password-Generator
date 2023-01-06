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
}
// Asks for length of password

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

  passwordText.value = "test";
  // passwordText.value = password;
}

// PWOptions object

let PWOptions = {
  length: 0,
  numbers: false,
  special: false,
  lower: false,
  upper: false
};

// Function to prompt user for password options
// check if 5 options chosen
// Create an array of length set by user
prompt('Enter a password length between 10 and 64 charachters');

// Asks if numbers are to be included
function confirmNumbers() {
  if (confirm('Do you want numbers (3,7,6) in your password?')) {
    PWOptions.numbers = true;
  }
}

// Asks if special characters are to be included

function confirmSpecial{
  if (confirm('Do you want special characters ({,],/) in your password?')
  ) {
    PWOptions.special = true;
  }
}

// Asks if lowercase characters are to be included
(confirm('Do you want lowercase characters (w,f,g) in your password?')
)
  // Asks if uppercase characters are to be included
  (confirm('Do you want uppercase characters (S,T,P) in your password?')
  );
// Populate array with random characters selected from character array
let characterArray;
// Create character array from selections by user
// Function for getting a random element from an array
function getRandom(arr) {

}
