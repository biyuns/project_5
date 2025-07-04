const moreInfo = document.querySelector('.moreInfo');

const hoverN = document.querySelector('.hoverN');



//modal 구현
moreInfo.addEventListener('mouseover', function () {
    hoverN.classList.add('show');
})
moreInfo.addEventListener('mouseout', function () {
    hoverN.classList.remove('show');
})
