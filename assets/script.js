// Assignment code here
var generatePassword = function () {
  var randomPassword = [];
  //ask user length of password
  var character = Number(window.prompt("How many characters would you like your password to contain?"));

  //verify that password length value entered is between 8 and 128 characters
  if (character < 8 || character > 128 || character === "" || character === null || character !== parseInt(character)) {
    window.alert("Password length must be at least 8 characters and no more than 128 characters");
    return generatePassword();
  }
  else {
    //array to store all array types chosen by user
    var total = []

    //does the user want lower case letters in the password?
    var lowerCase = window.confirm("Click 'OK' if you would like to include lowercase letters");
    if (lowerCase) {
      randomPassword.push(randomLetters);
      console.log(randomLetters);
      total = total.concat(letters)
    }

    //does the user want upper case letters in the password?
    var upperCase = window.confirm("Click 'OK' if you would like to include uppercase letters");
    if (upperCase) {
      randomPassword.push(randomUpper);
      console.log(randomUpper);
      total = total.concat(upperLetters)
    }

    //does the user want symbols in the password?
    var symbols = window.confirm("Click 'OK' if you would like to include special characters");
    if (symbols) {
      randomPassword.push(specialChar);
      console.log(specialChar);
      total = total.concat(specialChar)
    }

    //does the user want numbers in the password?
    var numeric = window.confirm("Click 'OK' if you would like to include numbers");
    if (numeric) {
      randomPassword.push(randomNum);
      console.log(randomNum);
      total = total.concat(numbers)
    }

    //verifies that user picked at least one character type or prompts user to start at beginning
    if (lowerCase == false && upperCase == false && symbols == false && numeric == false) {
      window.alert("Must select at least one character type")
      return generatePassword();
    }

    //loop to generate password according to desire length and character selection
  }
  var randomPassword = ""

  for (var i = 0; i < character; i++) {
  

    randomCharacter=total[Math.floor(Math.random()*total.length)];
    

    randomPassword += randomCharacter[i];
    
    
  }console.log(randomPassword);
}




//array of lowercase letters  
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//random selection of lowercase letters
var randomLetters = letters[Math.floor(Math.random() * letters.length)]
//array of uppercase letters
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//random selection of uppercase letters
var randomUpper = upperLetters[Math.floor(Math.random() * upperLetters.length)]
//array of special characters
var special = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
//random selection of special characters
var specialChar = special[Math.floor(Math.random() * special.length)]
//array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//random selection of numbers
var randomNum = parseInt(numbers[Math.floor(Math.random() * numbers.length)])



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
