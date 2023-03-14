const button = document.querySelector(".button");
const email = document.querySelector(".email");
const error = document.querySelector(".error");

const regx = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

button.addEventListener('click', validate);

function validate() {
    if (email.value == '') {
        error.innerHTML = 'Oops! Please add your email';
    } else if (!regx.test(email.value)) {
        error.innerHTML = "Oops! Please check your email";
        document.querySelector("error").style.color = "#FB3E3E";
    } else {
        error.innerHTML = '';
        
    }
}

