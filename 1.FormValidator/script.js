const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");


// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function isValidEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(username.value.trim() === ''){
       showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    
    if(email.value.trim() === ''){
        showError(email, 'email is required');
     } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    }  else {
         showSuccess(email);
     }

     
    if(password.value.trim() === ''){
        showError(password, 'password is required');
     } else {
         showSuccess(password);
     }

     
    if(password2.value.trim() === ''){
        showError(password2, 'password2 is required');
     } else {
         showSuccess(password2);
     }

});

