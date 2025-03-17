
const form = document.getElementById('form');
const emailErrorMessage = document.getElementById('error-message');
const successState = document.getElementById('success-state');
const emailHolder = document.getElementById('email');
const userEmail = document.querySelector('.user-email');
const dismissBtn = document.querySelector('.close-btn')

function validateEmail(email) {
    if (!email) {
      return 'Email is required';
    }

    const isValidEmail = /^\S+@\S+$/g
    if (email.trim() && !isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
   
  }

const handleSubmit = function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    const emailError = validateEmail(email);
    
    if(emailError) {
      emailErrorMessage.innerText = emailError;
      emailHolder.style.border = "1px solid hsl(4, 100%, 67%)";
      emailHolder.style.color = "hsl(4, 100%, 67%)";
      emailHolder.style.backgroundColor = "hsl(4, 100%, 90%)";
      
    }
    else {
      emailErrorMessage.innerText = '';
      form.classList.add('hidden');
      successState.classList.remove('hidden');
      userEmail.textContent = email;
      userEmail.style.fontWeight = "bold";
    }

};

form.addEventListener('submit', handleSubmit);

dismissBtn.addEventListener('click', function() {
  successState.classList.add('hidden');
  form.classList.remove('hidden');
  emailHolder.value = '';
  emailHolder.style.backgroundColor = "hsl(0, 0%, 100%)";
  emailHolder.style.border = "1px solid hsl(0, 0%,58%)";

});