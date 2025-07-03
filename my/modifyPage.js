const modifyBtn = document.querySelector('.modifyBtn');
const modal = document.querySelector('.modal');

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');

upload.addEventListener('click', () => {
    realUpload.click();
    modal.classList.toggle('hidden');

});

modifyBtn.addEventListener('click', () => modal.classList.toggle('hidden'));