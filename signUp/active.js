//input 입력 시 border 활성화 코드

const email = document.querySelector('#email');
const pw = document.querySelector('#pw');
const checkPW = document.querySelector('#checkPW');
const userName = document.querySelector('#userName');
const studentNum = document.querySelector('#studentNum');
const department = document.querySelector('#department');


const btnW = document.querySelector('.btnW');
const btnM = document.querySelector('.btnM');


let genderValue;
let bool;

const activeInput = (event) => {
    event.target.style.border = "1px solid #00F5A0"
}

const deactiveInput = (event) => {
    event.target.style.border = "0"
    const formId = event.target.parentNode.id;
    if (formId === 'form1') {
        bool = email.value.trim() === "" || pw.value.trim() === "" || checkPW.value.trim() === "";
        if (!bool) {
            nextBtn.classList.add('activeBtn');
        }
        nextBtn.disabled = bool;
    } else if (formId === 'form2') {
        bool = userName.value.trim() === "" || studentNum.value.trim() === "" || department.value.trim() === "" || !genderValue;
        if (!bool) {
            compBtn.classList.add('activeBtn');
        }
        compBtn.disabled = bool;
    }
}

const clickGender = (event) => {
    btnW.style.border = "0";
    btnM.style.border = "0";
    event.target.style.border = "1px solid #00F5A0"
    genderValue = event.target.value;
}

email.addEventListener('focus', activeInput);
email.addEventListener('focusout', deactiveInput);
pw.addEventListener('focus', activeInput);
pw.addEventListener('focusout', deactiveInput);
checkPW.addEventListener('focus', activeInput);
checkPW.addEventListener('focusout', deactiveInput);
userName.addEventListener('focus', activeInput);
userName.addEventListener('focusout', deactiveInput);
studentNum.addEventListener('focus', activeInput);
studentNum.addEventListener('focusout', deactiveInput);
department.addEventListener('focus', activeInput);
department.addEventListener('focusout', deactiveInput);

btnM.addEventListener('click', clickGender);
btnW.addEventListener('click', clickGender);
