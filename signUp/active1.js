//input 입력 시 border 활성화 코드

const email = document.querySelector('#email');
const pw = document.querySelector('#pw');
const checkPW = document.querySelector('#checkPW');

const failM = document.querySelector('p');

let bool;

const activeInput = (event) => {
    event.target.style.border = "1px solid #00F5A0"
}

//버튼 활성화
const deactiveInput = (event) => {
    event.target.style.border = "0"
    const formId = event.target.parentNode.id;
    if (formId === 'form1') {
        bool = email.value.trim() === "" || pw.value.trim() === "" || checkPW.value.trim() === "";
        if (!bool) {
            nextBtn.classList.add('activeBtn');
        }
        nextBtn.disabled = bool;
    }
}


//비밀번호 불일치
const failPW = () => {
    checkPW.style.border = "1px solid #FF4A4A";
    failM.classList.remove('hidden');
}


email.addEventListener('focus', activeInput);
email.addEventListener('focusout', deactiveInput);
pw.addEventListener('focus', activeInput);
pw.addEventListener('focusout', deactiveInput);
checkPW.addEventListener('focus', activeInput);
checkPW.addEventListener('focusout', deactiveInput);

