// Assignment code here
var generatePassword = function (){
  var characterLength = window.prompt ("How many characters would you like your password to contain?");

  //verify that password length value entered is between 8 and 128 characters
  if (characterLength < 8 || characterLength >128 || characterLength ===""){
    window.alert("Password length must be at least 8 characters and no more than 128 characters");
    return generatePassword();
  }
  var lowerCase=window.confirm ("Click 'OK' if you would like to include lowercase letters");
      if (lowerCase){
      console.log(randomLetters);
      }
  var upperCase=window.confirm("Click 'OK' if you would like to include uppercase letters");
      if (upperCase){
        console.log(randomUpper);
      }
    
   var symbols=window.confirm ("Click 'OK' if you would like to include special characters"); 
      if (symbols){
        console.log(specialChar);
      }
   var numeric=window.confirm("Click 'OK' if you would like to include numbers");
      if (numeric){
        console.log(randomNum);
      }
}
  
//array of lowercase letters  
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//random selection of lowercase letters
var randomLetters = letters[Math.floor(Math.random()*letters.length)]
//array of uppercase letters
var upperLetters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//random selection of uppercase letters
var randomUpper = upperLetters[Math.floor(Math.random()*upperLetters.length)]
//array of special characters
var special = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
//random selection of special characters
var specialChar = special[Math.floor(Math.random()*special.length)]
//array of numbers
var numbers=['1','2','3','4','5','6','7','8','9','10']
//random selection of numbers
var randomNum = numbers[Math.floor(Math.random()*numbers.length)]



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