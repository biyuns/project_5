document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('#loginemail');
    const pwInput = document.querySelector('#loginPW');

    const loginButton = document.querySelector('.loginBtn');
    loginButton.addEventListener('click', async function fetchLogin(params) {
        const email = emailInput.value.trim();
        const pw = pwInput.value.trim();

        if (!email || !pw) {
            alert("이메일과 비밀번호를 모두 입력해주세요");
            return;
        }

        try {

        } catch (error) {

        }

    })



})



