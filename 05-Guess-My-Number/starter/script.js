'use strict';

// 1. 1 부터 20 사이의 랜덤숫자를 뽑기
// 2. Check! 버튼 누르면 Score 숫자 -1
// 3. Again! 버튼 누르면 Score 숫자 20으로 초기화 1부터 20사이 랜덤 다시뽑기
// 4. 입력한 숫자와 뽑은 랜덤 숫자가 맞을 경우 정답!

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const guessBox = document.querySelector('.guess');
const score = document.querySelector('.score');

const randomNumber = Math.trunc(Math.random() * 20) + 1;
const handleAgain = () => location.reload();
const handleCheck = () => {
  if (!guessBox.value) {
    return alert('숫자를 입력해주세요!');
  }
  if (Number(score.innerText) === 0) {
    return alert('실패! Again! 버튼을 눌러 다시 시작해주세요!');
  }

  score.innerText = score.innerText - 1;
  if (randomNumber > Number(guessBox.value)) {
    return alert('숫자가 작아요!');
  }
  if (randomNumber < Number(guessBox.value)) {
    return alert('숫자가 커요!');
  }
  if (randomNumber === Number(guessBox.value)) {
    alert('성공!!');
    return location.reload();
  }
};
againBtn.addEventListener('click', handleAgain);
checkBtn.addEventListener('click', handleCheck);
