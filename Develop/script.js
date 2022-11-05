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
  // window.alert(password.length + ' length')


  // ask if include lowercase, uppercase, numeric, + special characters
  // propmt if want lowercase
  let lowercaseHold = window.prompt('do you want lowercase characters? Y or N')
  // window.alert(lowercaseHold + ' awnser')
  lowercaseHold.toUpperCase()
  if (lowercaseHold = 'Y'){
    password.lowercase = true
  }
  // window.alert(password.lowercase + ' lowercase')

  // propmt if want uppercase
  let uppercaseHold = window.prompt('do you want lowercase characters? Y or N')
  // window.alert(uppercaseHold + ' awnser')
  uppercaseHold.toUpperCase()
  if (uppercaseHold = 'Y'){
    password.uppercase = true
  }
  // window.alert(password.uppercase + ' uppercase')

  // propmt if want numeric 
  let numericHold = window.prompt('do you want lowercase characters? Y or N')
  // window.alert(numericHold + ' awnser')
  numericHold.toUpperCase()
  if (numericHold = 'Y'){
    password.numerics = true
  }

  // propmt if want special characters
  let specialHold = window.prompt('do you want lowercase characters? Y or N')
  // window.alert(specialHold + ' awnser')
  specialHold.toUpperCase()
  if (specialHold = 'Y'){
    password.special = true
  }
  // console.log(password)

  // at least one of all criterea i say yes to
  // generate password

  // for loop with lenght as the loops, pulling from alphebet 1-9 and !?%$#, then updating password.password
  // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
// randomly pick some characters from each array ie uper lower num and special, generate random array then concat and randomize array then print as a string

  // display new password in alert or to the page\
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



// check if each var is true or false, if true make a new var a random array from
//fuck its gotta have at aleast one thing ok maybe some kind of array call or random math to generate 1 from each?????????