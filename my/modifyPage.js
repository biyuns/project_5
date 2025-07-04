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

upload.addEventListener('click', () => {
    realUpload.click();
    modal.classList.toggle('hidden');

});

realUpload.addEventListener('change', getImageFiles);

modifyBtn.addEventListener('click', () => modal.classList.toggle('hidden'));