// Assignment Code
var generateBtn = document.querySelector("#generate");
let randomPassword = "";
let randomArray = [ ];
function generatePassword(){
    let = questionReturn1 = prompt("What would you like the length of your password to be?");
    if ( questionReturn1 <=128 && questionReturn1 >= 8){
      
    } else {
      alert("Please select a value between 8 and 128.");
    };
    
    numeric = confirm("Would you like numeric characters in your password?");
    if (numeric){
      randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    };

    

    
    let = questionReturn2 = confirm("Would you like special characters in your password?");
    if (questionReturn2){
      questionReturn2 = [ "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?" ];
      randomArray.push(... questionReturn2)
    };
    

    let = questionReturn3 = confirm("Would you like uppercase letters included in your password?");
    if (questionReturn3){
      questionReturn3 = ["A", "B", "C", "D", "E", "F", "G"]
      randomArray.push(... questionReturn3)
    };
    
    let = questionReturn4 = confirm("Would you like lowercase letters included in your password?");
    if (questionReturn4){
      questionReturn4 = ["a", "b", "c", "d", "e", "f", "g"]
      randomArray.push(... questionReturn4)
    };
    console.log(randomArray.length);
    for ( i = 0; i < questionReturn1; i++){

       randomPassword += randomArray[Math.floor(Math.random() * questionReturn1)+ 0];
    };
    
  };

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = randomPassword;
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
