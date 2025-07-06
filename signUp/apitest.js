document.addEventListener('DOMContentLoaded', function () {
  const nextBtn = document.querySelector('.nextBtn');
  const emailInput = document.getElementById('email');
  const pwInput = document.getElementById('pw');
  const checkPWInput = document.getElementById('checkPW');
  const warning = document.querySelector('#form1 .hidden');

  // 입력값이 모두 채워지면 버튼 활성화
  [emailInput, pwInput, checkPWInput].forEach(input => {
    input.addEventListener('input', function () {
      if (emailInput.value && pwInput.value && checkPWInput.value) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    });
  });

  // 회원가입 1단계 API 연동
  nextBtn.addEventListener('click', async function () {
    const email = emailInput.value.trim();
    const password = pwInput.value.trim();
    const checkPW = checkPWInput.value.trim();

    // 입력값 검증
    if (!email || !password || !checkPW) {
      warning.textContent = '모든 항목을 입력해 주세요.';
      warning.classList.remove('hidden');
      return;
    }
    if (password !== checkPW) {
      warning.textContent = '비밀번호가 일치하지 않습니다.';
      warning.classList.remove('hidden');
      return;
    }
    warning.classList.add('hidden');

    try {
      const res = await fetch('/api/members/step1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        // 성공: 다음 단계로 이동하거나 성공 메시지 표시
        alert('이메일 인증 메일이 발송되었습니다. 인증 후 다음 단계로 진행하세요.');
        // 예: document.getElementById('form1').classList.add('hide');
        //     document.getElementById('form2').classList.remove('hide');
      } else {
        warning.textContent = data.message || '회원가입 실패: ' + JSON.stringify(data);
        warning.classList.remove('hidden');
      }
    } catch (e) {
      warning.textContent = '네트워크 오류';
      warning.classList.remove('hidden');
    }
  });
});
