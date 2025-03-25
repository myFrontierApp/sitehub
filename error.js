// const name1 = document.getElementById('name')
// const password = document.getElementById('password')
// const form = document.getElementById('form')
// const button = document.getElementById('button')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (
//     name1.value === ''){
//       messages.push('Email Address is required')
//     }

//     if (messages.length > 0){
//       e.preventDefault()
//       errorElement.innerText = messages.join(', ')
//     }

// })


// let popup = document.getElementById("popup");

// let blur = document.getElementById("blur")

// function openpopup(){
//   popup.classList.add("open-popup");
// }
// function openpopup2(){
//   popup.classList.add("open-popup");
// blur.classList.add("active")
// }
// function closepopup(){
//   popup.classList.remove("open-popup");
  
// }

// Get form, error element and input fields
// Get form, error element and input fields
// Get form, error element and input fields
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const emailInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

// Get popup and blur elements
let popup = document.getElementById("popup");
let blur = document.getElementById("blur");

// Functions to open and close popup
function togglePopup() {
  popup.classList.toggle("open-popup");
  blur.classList.toggle("active");
}

function openpopup(){
  // Check if email and password inputs are filled
  if(emailInput.value !== '' && passwordInput.value !== '') {
    popup.classList.add("open-popup");
    blur.classList.add("active");
  } else {
    // If inputs are not filled, prevent form submission and show error messages
    let messages = [];
    if(emailInput.value === '') {
      messages.push('Email Address is required');
    }
    if(passwordInput.value === '') {
      messages.push('Password is required');
    }
    errorElement.innerText = messages.join(', ');
  }
}

function closepopup(){
  popup.classList.remove("open-popup");
  blur.classList.remove("active");
}

// Add event listener to form
form.addEventListener('submit', (e) => {
  let messages = [];

  // Check if email input is empty
  if(emailInput.value === '') {
    messages.push('Email Address is required');
  }

  // Check if password input is empty
  if(passwordInput.value === '') {
    messages.push('Password is required');
  }

  // If there are messages, prevent form submission and show error messages
  if(messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});



// You can now use togglePopup function for both opening and closing the popup