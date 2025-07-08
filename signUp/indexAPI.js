// indexAPI.js 파일에 아래 코드 작성

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('loginemail');
    const pwInput = document.getElementById('loginPW');
    const loginBtn = document.querySelector('.loginBtn');

    // 입력값이 모두 있을 때만 버튼 활성화
    function checkInputs() {
        if (emailInput.value && pwInput.value) {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true;
        }
    }

    emailInput.addEventListener('input', checkInputs);
    pwInput.addEventListener('input', checkInputs);

    // 로그인 버튼 클릭 시 API 연동
    loginBtn.addEventListener('click', ()=>{
        window.location.href = "/main/main_pg.html"
    }
    //     async function() {
    //     const email = emailInput.value.trim();
    //     const password = pwInput.value.trim();

    //     try {
    //         const response = await fetch('/auth/login', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ email, password })
    //         });

    //         if (response.ok) {
    //             // 로그인 성공
    //             alert('로그인 성공!');
    //             // 예시: 메인 페이지로 이동
    //             // window.location.href = 'main.html';
    //         } else {
    //             // 실패 시 에러 메시지 표시
    //             const result = await response.json();
    //             alert(result.message || '로그인 실패');
    //         }
    //     } catch (error) {
    //         alert('네트워크 오류');
    //     }
    // }
);
});
