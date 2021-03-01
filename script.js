
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let number = '0123456789'
let symbol = '!@#$%^&*()'
let combinedArray = ''


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  //    function writePassword() {
  //    var password = generatePassword();
var passwordText = document.querySelector("#password");
// symbol.split('').forEach(element => {
//   console.log(element)
//});


// Add event listener to generate button
generateBtn.addEventListener("click", () =>
  {
        //the following code prompts the user to select Password parameters upon clicking the Generate button
      let pwLength = prompt("How long is your password? Must be between 8 and 128 characters.");
          if (!pwLength) return;
          if (pwLength < 8 || pwLength > 128) {
          alert ("This does not meet the requirements! Try again.");
          return;
          } else {console.log(pwLength);  
          }
        
    


      let pwLower = window.confirm("Will your password include lowercase letters? *Required");
          if (pwLower === false) {
          alert ("Lowercase is required! Start over."); return;
          } else {combinedArray += lowerCase;
          }

      let pwUpper = window.confirm("Will your password include uppercase letters? *Required");
          if (pwUpper === false) {
          alert ("Uppercase is required! Start over."); return;
          } else {combinedArray += upperCase;
          }

      let pwNumber = window.confirm("Will your password include numbers? *Required"); 
          if (!pwNumber) {
          alert ("Numbers are required! Start over."); return;
          } else {combinedArray += number;
          }

      let pwSymbol = window.confirm("Will your password include symbols? *Optional");
          if (pwSymbol){
            combinedArray += symbol;
          }

        
         
            let generatedPassword = '';
            
            
            for (let i = 0; i < parseInt(pwLength); i++){
              let randomNumber = Math.floor(Math.random() * combinedArray.length)
             generatedPassword += combinedArray[randomNumber]
            }
            passwordText.value = generatedPassword 
    
  
  });


