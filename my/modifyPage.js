const backArrow = document.querySelector('.backArrow');
const compMBtn = document.querySelector('.compMBtn');

//페이지 이동(마이페이지)
backArrow.addEventListener('click', () => {
    window.location.href = "myPage.html";
})
compMBtn.addEventListener('click', () => {
    window.location.href = "myPage.html";
})



const modifyBtn = document.querySelector('.modifyBtn');
const modal = document.querySelector('.modal');

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

//img 파일 읽어오고 업로드하는 코드
const getImageFiles = (e) => {
    const file = e.currentTarget.files[0];
    const profilePho = document.querySelector('.profilePho')
    const reader = new FileReader();
    reader.onload = (e) => {
        profilePho.setAttribute('src', e.target.result);
        profilePho.setAttribute('data-file', file.name)
    };
    reader.readAsDataURL(file);

}

//modal 구현
upload.addEventListener('click', () => {
    realUpload.click();
    modal.classList.toggle('hidden');

});
modifyBtn.addEventListener('click', () => modal.classList.toggle('hidden'));


realUpload.addEventListener('change', getImageFiles);
