const moreInfo = document.querySelector('.moreInfo');
const hoverN = document.querySelector('.hoverN');

const modify = document.querySelector('.modify');

const myContent = document.querySelector('.myContentBtn');
const partiBuy = document.querySelector('.partBuyBtn');
const logout = document.querySelector('#logout');


//페이지 이동(수정 페이지)
modify.addEventListener('click', () => {
    window.location.href = "modifyPage.html";
})


//페이지 이동(내가 쓴 글)
myContent.addEventListener('click', () => {
    window.location.href = "myContent.html";
})

//페이지 이동(참여 공구)
partiBuy.addEventListener('click', () => {
    window.location.href = "partiBuy.html";
})

//페이지 이동(로그인)
logout.addEventListener('click', () => {
    window.location.href = "../signUp/index.html";
})




//hover 구현
moreInfo.addEventListener('mouseover', function () {
    hoverN.classList.add('show');
})
moreInfo.addEventListener('mouseout', function () {
    hoverN.classList.remove('show');
})
