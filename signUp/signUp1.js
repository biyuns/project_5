const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const headerP1 = document.querySelector('.headerP1');
const headerP2 = document.querySelector('.headerP2');
const numCircle = document.querySelectorAll('.numCircle');
const backArrow1 = document.querySelector('.backArrow1');
const backArrow2 = document.querySelector('.backArrow2');
const nextBtn = document.querySelector('.nextBtn');
const compBtn = document.querySelector('.compBtn');

//화면 전환 코드
const clickNext = () => {
    form1.classList.toggle('hide');
    form2.classList.toggle('hide');
    headerP1.classList.toggle('hide');
    headerP2.classList.toggle('hide');
    backArrow1.classList.toggle('hide');
    backArrow2.classList.toggle('hide');
    numCircle[0].classList.remove('colorNum');
    numCircle[1].classList.add('colorNum');


}




nextBtn.addEventListener('click', clickNext);
compBtn.addEventListener('click', () => {
    window.location.href = "signUp2.html";
})
backArrow1.addEventListener('click', () => {
    window.location.href = "index.html";
})
backArrow2.addEventListener('click', clickNext);



