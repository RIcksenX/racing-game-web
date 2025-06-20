const hamburger = document.querySelector(".hamburger")
const navM = document.querySelector(".nav-menu")
var hamburger_bool = 0

hamburger.addEventListener('click', function() {
  if(!hamburger_bool) {
    console.log('active')
    hamburger.classList.add("active");   
    navM.classList.add("active");
    hamburger_bool = 1
  }else {console.log('deactive')
    hamburger.classList.remove("active");
    navM.classList.remove("active");
    hamburger_bool = 0
  }
})

const Sbutton = document.querySelector('#subs');
const Xbutton = document.querySelector(".cancel");
const formB = document.querySelector(".subs-form");

Sbutton.addEventListener('click', (e) => {
  e.preventDefault()
  formB.classList.add("active")
})
Xbutton.addEventListener('click', (e) => {
  e.preventDefault()
  formB.classList.remove("active")
})

var formValidation = true
document.getElementById("subsForm").addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('submit')

  const role = document.querySelector('input[name="role"]:checked')
  const username = document.getElementById('username').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value
  const dob = document.getElementById('dob').value
  const country = document.getElementById('country').value
  const gender = document.querySelector('input[name="gender"]:checked')
  const terms = document.getElementById('terms').checked

  if(!role) {
    document.getElementById('roleError').innerHTML = "Must choose one"
    formValidation = false
  }else {
    document.getElementById('roleError').innerHTML = ""
  }

  if(username.length <= 3) {
    document.getElementById('usernameError').innerHTML = "Username should at least contain 3 letter"
    formValidation = false
  }else {
    document.getElementById('usernameError').innerHTML = ""
  }

  if(!email.endsWith('@gmail.com')) {
    document.getElementById('emailError').innerHTML = "Not a valid email"
    formValidation = false
  }else {
    document.getElementById('emailError').innerHTML = ""
  }

  if(password == "") {
    document.getElementById('passwordError').innerHTML = "Must be filled"
    formValidation = false
  }else if(!passwordValidation(password)) {
    document.getElementById('passwordError').innerHTML = "Should contain caps letter, number and ymbol"
    formValidation = false
  }else {
      document.getElementById('passwordError').innerHTML = ""
  }
  

  if(confirmPassword !== password) {
    document.getElementById('confirmPasswordError').innerHTML = "Password should be the same"
    formValidation = false
  }else if(confirmPassword == "") {
    document.getElementById('confirmPasswordError').innerHTML = "Must be filled"
    formValidation = false
  }else {
    document.getElementById('confirmPasswordError').innerHTML = ""
  }

  if(!dob) {
    document.getElementById('dobError').innerHTML = "Must be filled"
    formValidation = false
  }
  else {
    document.getElementById('dobError').innerHTML = ""
  }

  if(country == "" ) {
    document.getElementById('countryError').innerHTML = "Must choose one"
    formValidation = false
  }else {
    document.getElementById('countryError').innerHTML = ""
  }

  if(!gender) {
    document.getElementById('genderError').innerHTML = "Must choose one"
    formValidation = false
  }else {
    document.getElementById('genderError').innerHTML = ""
  }

  if(!terms) {
    document.getElementById('termsError').innerHTML = "Agree with terms and condition"
    formValidation = false
  }else {
    document.getElementById('termsError').innerHTML = ""
  }

  console.log(formValidation)
  if(formValidation) {
    formB.classList.remove("active")
    alert("register Succes")
    formB.reset()
  }
})

const passwordType = document.getElementById('password')
document.getElementById('eyeIcon').onclick = function() {
  if(passwordType.type == "text") {
    console.log(document.getElementById('password').type)
    passwordType.type = "password"
  }else {
    passwordType.type = "text"
  }
}

function passwordValidation(password) {
  let hasLetter = false
  let hasCaps = false
  let hasNumber = false
  let hasSymbol = false
  for (let i=0; i<password.length; i++) {
      const character = password[i]
      
      if(character >= 'a' && character <= 'z')
        hasLetter = true
      else if(character >= 'A' && character <= 'Z')
        hasCaps = true
      else if(character >= '0' && character <= '9') 
        hasNumber = true
      else 
        hasSymbol = true
  }

  console.log(hasLetter)
  console.log(hasCaps)
  console.log(hasNumber)
  console.log(hasSymbol)

  return hasLetter && hasCaps && hasNumber && hasSymbol
}