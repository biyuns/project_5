const backArrow = document.querySelector('img');

//페이지 이동(마이페이지)
backArrow.addEventListener('click', () => {
    window.location.href = "myPage.html";
})



const myContentList = document.querySelector('section');
const li = document.querySelectorAll('li');


alists = [
    {
        receiptM: "직접수령",
        title: "공구",
        date: "마감 6.11(수) 오후 8:00",
        price: 11000,
        personnel: "17/20명 참여중",
        like: true
    }, {
        receiptM: "직접수령",
        title: "공구2",
        date: "마감 6.13(금) 오후 8:00",
        price: 11000,
        personnel: "17/20명 참여중",
        like: false
    },
]

blists = [
    {
        receiptM: "직접수령",
        title: "공구3",
        date: "마감 6.11(수) 오후 8:00",
        price: 11000,
        personnel: "17/20명 참여중",
        like: false
    }, {
        receiptM: "직접수령",
        title: "공구4",
        date: "마감 6.13(금) 오후 8:00",
        price: 11000,
        personnel: "17/20명 참여중",
        like: true
    },
]

//화면 출력
const showList = (lists) => {
    myContentList.innerHTML = "";
    if (lists === blists) {
        const deadline = document.createElement('div');

    }
    lists.forEach(list => {

        const buyInfo = document.createElement('div');
        const productImg = document.createElement('img');
        const buyInfoText = document.createElement('div');
        const heart = document.createElement('img');

        buyInfo.classList.add('buyInfo');
        productImg.classList.add('productImg');
        productImg.setAttribute('src', "svg\\product.svg");
        buyInfoText.classList.add('buyInfoText');
        heart.classList.add('heart');

        //찜 유무에 따라 svg변경
        if (list.like) {
            heart.setAttribute('src', "svg\\heart.svg");
        } else {
            heart.setAttribute('src', "svg\\unheart.svg");
        }

        //찜 유무 변경
        heart.addEventListener('click', () => {
            list.like = !list.like;
            if (list.like) {
                heart.setAttribute('src', "svg\\heart.svg");
            } else {
                heart.setAttribute('src', "svg\\unheart.svg");
            }
        })

        const receiptDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        const priceDiv = document.createElement('div');
        const personnelDiv = document.createElement('div');

        receiptDiv.classList.add('receipt');
        receiptDiv.textContent = list.receiptM;
        titleDiv.classList.add('title');
        titleDiv.textContent = list.title;
        dateDiv.classList.add('date');
        dateDiv.textContent = list.date;
        priceDiv.classList.add('price');
        priceDiv.textContent = list.price;
        personnelDiv.classList.add('personnel');
        personnelDiv.textContent = list.personnel;


        buyInfoText.appendChild(receiptDiv);
        buyInfoText.appendChild(titleDiv);
        buyInfoText.appendChild(dateDiv);
        buyInfoText.appendChild(priceDiv);
        buyInfoText.appendChild(personnelDiv);

        buyInfo.appendChild(productImg);
        buyInfo.appendChild(buyInfoText);
        buyInfo.appendChild(heart);

        myContentList.appendChild(buyInfo);

    });
}


//마감 표시 생성
const deadlineDiv = () => {
    const buyInfo = document.querySelectorAll('.buyInfo');
    buyInfo.forEach(info => {
        const deadline = document.createElement('div');
        deadline.classList.add('deadline');
        deadline.textContent = "마감";
        info.appendChild(deadline);
    });
}


showList(alists);


li[0].addEventListener('click', () => {
    showList(alists);
    li[0].classList.add('activeLi');
    li[1].classList.remove('activeLi');
})

li[1].addEventListener('click', () => {
    showList(blists);
    deadlineDiv();
    li[1].classList.add('activeLi');
    li[0].classList.remove('activeLi');
})

