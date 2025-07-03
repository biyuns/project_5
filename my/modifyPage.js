const modifyBtn = document.querySelector('.modifyBtn');
const modal = document.querySelector('.modal');

const realUpload = document.querySelector('.real-upload');
const upload = document.querySelector('.upload');


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