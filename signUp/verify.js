window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
        alert('토큰이 없습니다.');
        return;
    }

    fetch(`/api/members/verify?token=${token}`)
        .then(response => response.text())
        .then(result => {
            if (result === 'Verification success') {
                window.location.href = 'signUp3.html';
            } else {
                alert('인증 실패: ' + result);
            }
        })
        .catch(error => {
            console.error('에러 발생:', error);
            alert('서버 요청 중 에러가 발생했습니다.');
        });
});
