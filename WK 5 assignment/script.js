alert('Please fill this form if you will be in church tomorrow!');

const form = document.getElementById('validation'); 
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true; 

  if (firstNameInput.value.trim() === '') {
    showError(firstNameInput, 'First name is required.');
    isValid = false;
  } else {
    clearError(firstNameInput);
  }
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email.');
    isValid = false;
  } else {
    clearError(emailInput);
  }
  if (passwordInput.value.length < 8) {
    showError(passwordInput, 'Password must be at least 8 characters long.');
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  if (isValid) {
    form.submit();
  }
});

function showError(inputElement, message) {
  const formControl = inputElement.parentElement; 
  const errorElement = formControl.querySelector('.error-message'); 
  
  if (errorElement) {
    errorElement.textContent = message;
    formControl.classList.add('error');
  }
}

function clearError(inputElement) {
  const formControl = inputElement.parentElement;
  const errorElement = formControl.querySelector('.error-message');

  if (errorElement) {
    errorElement.textContent = '';
    formControl.classList.remove('error');
  }
}
