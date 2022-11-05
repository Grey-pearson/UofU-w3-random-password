// Assignment code here
let password = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numerics: false,
  special:  false,
  password: 'string'
}

function generatePassword(){
  // prompt for length of password
  // length min 8 max 128
  password.length = window.prompt('pick the length of your new password')
  if ((password.length < 8) || ( password.length > 128)){
    password.length = 8
  }

  // ask if include lowercase, uppercase, numeric, + special characters
  // propmt if want lowercase
  let lowercaseHold = window.prompt('do you want lowercase characters? Y or N')
  lowercaseHold.toUpperCase()
  if (lowercaseHold == 'Y'){
    password.lowercase = true
  }

  // propmt if want uppercase
  let uppercaseHold = window.prompt('do you want lowercase characters? Y or N')
  uppercaseHold.toUpperCase()
  if (uppercaseHold == 'Y'){
    password.uppercase = true
  }

  // propmt if want numeric 
  let numericHold = window.prompt('do you want lowercase characters? Y or N')
  numericHold.toUpperCase()
  if (numericHold == 'Y'){
    password.numerics = true
  }

  // propmt if want special characters
  let specialHold = window.prompt('do you want lowercase characters? Y or N')
  specialHold.toUpperCase()
  if (specialHold == 'Y'){
    password.special = true
  }

  let temp = []
  let randomArray = []

  while(randomArray.length < password.length+1){
    let randomIndex = 0
    let entery = []

    if(randomArray.length == password.length){
      break
    }

    if(password.lowercase == true){
      let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      randomIndex = Math.floor(Math.random() * lowercase.length);
      entery = lowercase[randomIndex]
      randomArray.push(entery)
    }

    if(randomArray.length == password.length){
      break
    }

    if(password.uppercase == true){
      let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      randomIndex = Math.floor(Math.random() * uppercase.length);
      entery = uppercase[randomIndex]
      randomArray.push(entery)
    }

    if(randomArray.length == password.length){
      break
    }

    if(password.numerics == true){
      let numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      randomIndex = Math.floor(Math.random() * numerics.length);
      entery = numerics[randomIndex]
      randomArray.push(entery)
    }

    if(randomArray.length == password.length){
      break
    }

    if(password.special == true){
      let special = ['!', '@', '#', '$', '%', '^', '&', '*', '?']
      randomIndex = Math.floor(Math.random() * special.length);
      entery = special[randomIndex]
      randomArray.push(entery)
    }

  }

  let finalPassword = randomArray.toString()
  console.log(finalPassword)
  window.alert(finalPassword)
}

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

console.log('testing')
