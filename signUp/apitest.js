// BASE_URL 없이 바로 /api/로 요청

// 회원가입 1단계: 이메일, 비밀번호 입력 후 '다음' 버튼 클릭 시
document.querySelector('.nextBtn').addEventListener('click', async function () {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('pw').value.trim();
  const checkPW = document.getElementById('checkPW').value.trim();
  const warning = document.querySelector('#form1 .hidden');

  // 간단한 검증
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
    // API 호출 (BASE_URL 없이)
    const res = await fetch(`/api/members/step1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      // 성공: 다음 단계로 이동
      document.getElementById('form1').classList.add('hide');
      document.getElementById('form2').classList.remove('hide');
      document.querySelector('.headerP1').classList.add('hide');
      document.querySelector('.headerP2').classList.remove('hide');
    } else {
      warning.textContent = data.message || '회원가입 실패: ' + JSON.stringify(data);
      warning.classList.remove('hidden');
    }
  } catch (e) {
    warning.textContent = '네트워크 오류';
    warning.classList.remove('hidden');
  }
});

// 회원가입 2단계: 이름, 성별, 학번, 학과 입력 후 '완료하기' 버튼 클릭 시
document.querySelector('.compBtn').addEventListener('click', async function () {
  const name = document.getElementById('userName').value.trim();
  const gender = document.querySelector('.btnW.active') ? 'female'
                : document.querySelector('.btnM.active') ? 'male' : '';
  const number = document.getElementById('studentNum').value.trim();
  const major = document.getElementById('department').value.trim();
  const warning = document.querySelector('#form2 .hidden');

  if (!name || !gender || !number || !major) {
    warning.textContent = '모든 항목을 입력해 주세요.';
    warning.classList.remove('hidden');
    return;
  }
  warning.classList.add('hidden');

  try {
    const res = await fetch(`/api/members/step2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, gender, number, major })
    });
    const data = await res.json();
    if (res.ok) {
      alert('회원가입이 완료되었습니다!');
      // 완료 후 원하는 동작 추가
    } else {
      warning.textContent = data.message || '회원가입 실패: ' + JSON.stringify(data);
      warning.classList.remove('hidden');
    }
  } catch (e) {
    warning.textContent = '네트워크 오류';
    warning.classList.remove('hidden');
  }
});

// 성별 버튼 토글
document.querySelectorAll('.btnW, .btnM').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.btnW, .btnM').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// 이메일 인증, 로그인 등 추가 API 연동 예시

// 이메일 인증 (토큰 필요)
async function verifyEmail(token) {
  try {
    const res = await fetch(`/api/members/verify?token=${encodeURIComponent(token)}`);
    const data = await res.json();
    if (res.ok) {
      alert('이메일 인증 성공');
    } else {
      alert('이메일 인증 실패: ' + (data.message || JSON.stringify(data)));
    }
  } catch (e) {
    alert('네트워크 오류');
  }
}

// 로그인 예시 (로그인 폼이 별도로 있을 경우)
async function login(email, password) {
  try {
    const res = await fetch(`/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      alert('로그인 성공');
      // 토큰 저장 등 추가 동작
    } else {
      alert('로그인 실패: ' + (data.message || JSON.stringify(data)));
    }
  } catch (e) {
    alert('네트워크 오류');
  }
}
