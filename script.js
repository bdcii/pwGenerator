



// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
//  function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

//    passwordText.value = password;
//  }



// const passwordText = document.querySelector("#password");

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener("click", () =>
  {
        //the following code prompts the user to seledt Password paramaters upon clicking the Generate button
      let pwLength = prompt("How long is your password? Must be between 8 and 128 characters.");
          if (pwLength === null || pwLength === undefined) return;
          if (pwLength < 8 || pwLength > 128) {
          alert ("This does not meet the requirements! Try again.");
          return;
          } else {console.log(pwLength);  
          }

      let pwLower = window.confirm("Will your password include lowercase letters? *Required");
          if (pwLower === false) {
          alert ("Lowercase is required! Start over."); return;
          } else {console.log(pwLower);
          }

      let pwUpper = window.confirm("Will your password include uppercase letters? *Required");
          if (pwUpper === false) {
          alert ("Uppercase is required! Start over."); return;
          } else {console.log(pwUpper);
          }

      let pwNumber = window.confirm("Will your password include numbers? *Required"); 
          if (pwNumber === false) {
          alert ("Numbers are required! Start over."); return;
          } else {console.log(pwNumber);
          }

      let pwSymbol = window.confirm("Will your password include symbols? *Optional");
          console.log(pwSymbol);

      
      const length = +pwLength.value;
     
      const hasLower = (pwLower === true);
      const hasUpper = (pwUpper === true);
      const hasNumber = (pwNumber === true);
      const hasSymbol = (pwSymbol == true);

      passwordText.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length); //***

  });

    function generatePassword(lower, upper, number, symbol, length){

      let generatedPassword = '';

      const typesCount = lower + upper + number + symbol;

      console.log('typesCount: ', typesCount);

      const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
      (
          item => Object.values(item)[0]
      );

      console.log('typesArr: ', typesArr);

      for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          console.log('funcName: ', funcName);

          generatedPassword += randomFunc[funcName]();
        });
      }
      const finalPassword = generatedPassword.slice(0, length);
     return finalPassword;
    }

    //Generator functions to get random characters
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}   
    console.log(getRandomLower());

function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //Uppercase start at spot 65 in the browser character set.
}
    console.log(getRandomUpper());
    
function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48); //48 is where numbers start in browser character set
}
    console.log(getRandomNumber());

function getRandomSymbol() {
        const symbols = '!@#$String.f%^&*(){}[]=<>/,.';
        return symbols[Math.floor(Math.random() * symbols.length)];
}
    console.log(getRandomSymbol());    