// Assignment code here
let password = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numerics: false,
  special:  false
}

function generatePassword(){
  // prompt for length of password
  // length min 8 max 128
  password.length = window.prompt('pick the length of your new password')
  if ((password.length < 8) || ( password.length > 128)){
    password.length = 8
  }
  console.log(password)

  // ask if include lowercase, uppercase, numeric, + special characters
  // propmt if want lowercase
  let lowercaseHold = window.prompt('do you want lowercase characters? Y or N')
  lowercaseHold = lowercaseHold.toUpperCase()
  if (lowercaseHold === 'Y'){
    password.lowercase = true
  }
  console.log(password)

  // propmt if want uppercase
  let uppercaseHold = window.prompt('do you want uppercase characters? Y or N')
  uppercaseHold = uppercaseHold.toUpperCase()
  if (uppercaseHold === 'Y'){
    password.uppercase = true
  }
  console.log(password)

  // propmt if want numeric 
  let numericHold = window.prompt('do you want numbers? Y or N')
  numericHold = numericHold.toUpperCase()
  if (numericHold === 'Y'){
    password.numerics = true
  }
  console.log(password)

  // propmt if want special characters
  let specialHold = window.prompt('do you want special characters? Y or N')
  specialHold = specialHold.toUpperCase()
  if (specialHold === 'Y'){
    password.special = true
  }
  console.log(password)

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

  password.lowercase = false
  password.uppercase = false
  password.numerics = false
  password.special = false
  console.log(password)
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
