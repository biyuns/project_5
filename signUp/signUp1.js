const backArrow1 = document.querySelector('.backArrow1');

const nextBtn = document.querySelector('.nextBtn');


//화면 전환 코드
const clickNext = () => {
    alert("이메일 확인해주세요")
    // window.location.href = "verify.html";
}


nextBtn.addEventListener('click', clickNext);

backArrow1.addEventListener('click', () => {
    window.location.href = "index.html";
})




