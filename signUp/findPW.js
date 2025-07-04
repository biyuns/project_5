//input 입력 시 border 활성화 코드

const findemail = document.querySelector('#findemail');
const changePWBtn = document.querySelector('.changePWBtn');
const signUP = document.querySelector('.signUP');

let bool;

const activeInput = (event) => {
    event.target.style.border = "1px solid #00F5A0"
}

const deactiveInput = (event) => {
    event.target.style.border = "0"
    bool = findemail.value.trim() === "";
    if (!bool) {
        changePWBtn.classList.add('activeBtn');
    }
    changePWBtn.disabled = bool;

}

findemail.addEventListener('focus', activeInput);
findemail.addEventListener('focusout', deactiveInput);
signUP.addEventListener('click', () => {
    window.location.href = "signUp1.html";
})