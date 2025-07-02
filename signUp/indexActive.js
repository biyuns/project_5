const loginemail = document.querySelector('#loginemail');
const loginPW = document.querySelector('#loginPW');

const loginBtn = document.querySelector('.loginBtn');

const forgetPW = document.querySelector('.forgetPW');

const signUP = document.querySelector('.signUP');

let bool;

const activeInput = (event) => {
    event.target.style.border = "1px solid #00F5A0"
}

const deactiveInput = (event) => {
    event.target.style.border = "0"

    bool = loginemail.value.trim() === "" || loginPW.value.trim() === "";
    if (!bool) {
        loginBtn.classList.add('activeBtn');
    }
    loginBtn.disabled = bool;
}


loginemail.addEventListener('focus', activeInput);
loginemail.addEventListener('focusout', deactiveInput);
loginPW.addEventListener('focus', activeInput);
loginPW.addEventListener('focusout', deactiveInput);
forgetPW.addEventListener('click', () => {
    window.location.href = "findPW.html";
})
signUP.addEventListener('click', () => {
    window.location.href = "signUp1.html";
})