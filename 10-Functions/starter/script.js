'use strict';

// 간단한 여론조사 앱을 만들어 봅시다!

// 여론조사는 질문, 사람들이 선택할 수 있는 옵션들의 배열, 그리고 각 옵션에 대한 응답 수를 포함하는 배열을 가진다. 이 데이터는 아래의 시작 객체에 저장된다.

// 작업 내용은 다음과 같습니다:

// 1. 'poll' 개체에 'registerNewAnswer'라는 메서드를 만듭니다. 이 메서드는 다음 두 가지 작업을 수행합니다:
// 1.1. 사용자가 선택한 옵션의 번호를 입력하도록 프롬프트 창을 표시합니다. 프롬프트는 다음과 같습니다:
// 당신이 가장 좋아하는 프로그래밍 언어는 무엇입니까?
// 0: 자바스크립트
// 1: 파이썬
// 2: 녹
// 3: C++
// (옵션번호작성)

// 1.2. 입력된 숫자에 기초하여 답변 배열을 업데이트한다. 예를 들어, 옵션이 3인 경우 배열의 AT POSITION 3 값을 1 증가시킨다. 입력이 숫자인지와 숫자가 의미가 있는지 확인한다(예: 답변 52는 의미가 없지 않은가?)
// 2. 사용자가 "응답 여론조사" 단추를 누를 때마다 이 방법을 호출합니다.
// 3. poll 결과를 표시하는 method 'displayResults'를 만듭니다. method는 문자열을 입력('type'이라고 함)으로 하며, 이는 'string' 또는 'array'가 될 수 있습니다. type이 'array'인 경우 console.log()를 사용하여 결과 배열을 그대로 표시하면 됩니다. type이 'string'인 경우 "poll 결과는 13, 2, 4, 1"과 같은 문자열을 표시합니다.
// 4. 각 '새 답변 등록' 메서드 호출의 마지막에 '결과 표시' 메서드를 실행합니다.

// 힌트: 이 섹션과 마지막 섹션에서 배운 많은 도구를 사용하십시오. 😉

// 보너스: 테스트 데이터에서 두 개의 배열을 표시하려면 '결과 표시' 방법을 사용하십시오. 배열과 문자열 옵션을 모두 사용하십시오. 배열을 여론조사 개체에 넣지 마십시오! 이 상황에서 이 키워드는 어떻게 보여야 합니까?

// 보너스 테스트 데이터 1: [5, 2, 3]
// 보너스 테스트 데이터 2: [1, 5, 3, 9, 6, 1]

// 행운을 빌어요 😀
// */

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}
  
            ${this.options}`
      )
    );

    if (answer !== 0 && answer !== 1 && answer !== 2 && answer !== 3) {
      return alert('제대로 입력해주세요!');
    }

    poll.answers[answer]++;
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    }
    if (type === 'string') {
      console.log(this.answers.join(', '));
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
