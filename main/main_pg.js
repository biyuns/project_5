const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track .slide');
const slideCount = slides.length;
const slideWidth = 351;
let idx = 0;
let startX = 0, currentX = 0, isDragging = false, autoSlideInterval;

function goToSlide(n, animate = true) {
  if (animate) track.style.transition = 'transform 1s';
  else track.style.transition = 'none';
  idx = n;
  track.style.transform = `translateX(-${idx * slideWidth}px)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    // 오른쪽 끝에서 다시 0번으로
    if (idx < slideCount - 1) {
      goToSlide(idx + 1);
    } else {
      goToSlide(0);
    }
  }, 2500);
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

track.addEventListener('mousedown', dragStart);
track.addEventListener('touchstart', dragStart);

function dragStart(e) {
  stopAutoSlide();
  isDragging = true;
  startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  track.style.transition = 'none';

  document.addEventListener('mousemove', dragMove);
  document.addEventListener('mouseup', dragEnd);
  document.addEventListener('touchmove', dragMove);
  document.addEventListener('touchend', dragEnd);
}

function dragMove(e) {
  if (!isDragging) return;
  currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  const diff = currentX - startX;
  track.style.transform = `translateX(${-idx * slideWidth + diff}px)`;
}

function dragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  const diff = currentX - startX;
  if (Math.abs(diff) > slideWidth / 4) {
    if (diff < 0) {
      // 오른쪽으로 넘길 때
      if (idx < slideCount - 1) {
        goToSlide(idx + 1);
      } else {
        goToSlide(0); // 마지막에서 첫 번째로
      }
    } else if (diff > 0) {
      // 왼쪽으로 넘길 때
      if (idx > 0) {
        goToSlide(idx - 1);
      } else {
        goToSlide(slideCount - 1); // 첫 번째에서 마지막으로
      }
    } else {
      goToSlide(idx);
    }
  } else {
    goToSlide(idx);
  }
  startAutoSlide();

  document.removeEventListener('mousemove', dragMove);
  document.removeEventListener('mouseup', dragEnd);
  document.removeEventListener('touchmove', dragMove);
  document.removeEventListener('touchend', dragEnd);
}

// 초기화
goToSlide(0, false);
startAutoSlide();
