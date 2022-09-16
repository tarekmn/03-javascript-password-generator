// Assignment Code
var generateBtn = document.querySelector("#generate");


// Global Variables:              
let userCharacters= 8;
let lowerCaseUser= true;
let upperCaseUser = true;
let numericalUser = true;
let specialUser = true;

//Declaring the arrays of range of potential outcomes
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = [' ','!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_' , '`', '{', '|', '}', '~'] ;
var digits = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9'];
var targetArray = [ ]; 
var joinedTargetArray = [ ];
var arrayPassword= [ ];
//var password1 = arrayPassword.join("")           


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Generate Password trigger           
function generatePassword () {
  console.log("button clicked");
  howManyCharacters ();
  if (userCharacters < 8 || userCharacters > 128) {
    alert("please choose more than 8 or less than 128")
    return generatePassword ();
  }; 
  useLowerCase();
  useUpperCase(); 
  useNumerical();
  useSpecial();
  targetArray = [];
  filterInputs ();
  arrayPassword = [];
  generatePasswordArray ();
  var password1 = arrayPassword.join("")  
  console.log(password1)
  return password1
};


// Ask user how many characters they want:
function howManyCharacters () {
  userCharacters = parseInt(prompt("How many characters?"));
  console.log(userCharacters);

}

// Ask user if they want lower case : 
function useLowerCase() {
  lowerCaseUser = confirm("Do you want lower case letters in the password?");
  console.log(lowerCaseUser);
}

// Ask user if they want upper case:
function useUpperCase() {
  upperCaseUser = confirm("Do you want upper case letters in the password?");
  console.log(upperCaseUser);
}

// Ask user if they want numerical: 
function useNumerical() {
  numericalUser = confirm("Do you want numerical in the password?");
  console.log(numericalUser);
}
// Ask user if they want special character: 
function useSpecial() {
  specialUser = confirm("Do you want to use special characters in the password?");
  console.log(specialUser);
}




//to filter out using userinputs//

function filterInputs () {
if (lowerCaseUser === true) {
   targetArray.push(lowerCaseLetters)
};

if (upperCaseUser === true) {
  targetArray.push(upperCaseLetters)
}; 
if (numericalUser === true) {
  targetArray.push(digits)
};

if (specialUser === true) {
  targetArray.push(specialCharacters)
};
joinedTargetArray = targetArray.flat()
}



//console.log(targetArray);
console.log(joinedTargetArray);



function generatePasswordArray () {
for (var i = 0; i < userCharacters; i++ ) {
var min =0;
var max = joinedTargetArray.length;
var randomx= Math.floor(Math.random () * (max - min +1) + min);
arrayPassword.push(joinedTargetArray[randomx]);

} }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




