'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// 코딩 챌린지 #2

/*
개에 대한 줄리아와 케이트의 연구로 돌아가봅시다. 이번에는, 그들이 개의 나이를 사람의 나이로 환산해서 연구에 참여한 개들의 평균 나이를 계산하려고 합니다.

개의 나이('나이') 배열을 수용하고 다음 작업을 순서대로 수행하는 'calAverageHumanAge' 함수를 만듭니다:

1. 개가 <= 2살이면, 인간 나이 = 2 * 개 나이이다. 개가 2살 이상이면, 인간 나이 = 16 + 개 나이 * 4이다.
2. 18세 미만의 모든 개는 제외(18세 이상의 개를 기르는 것과 동일)
3. 모든 성인 개의 평균 인간 나이를 계산하십시오(다른 도전을 통해 우리가 평균을 계산하는 방법을 이미 알고 있어야 합니다😉)
4. 두 테스트 데이터 세트 모두에 대해 함수 실행

테스트 데이터 1: [5, 2, 4, 1, 15, 8, 3]
테스트 데이터 2: [16, 6, 10, 5, 6, 1, 4]

행운을 빌어요 😀*/

function calAverageHumanAge(dogAgeArr) {
  const humanAgeArr = dogAgeArr
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18);

  const averageHumanAge = humanAgeArr.reduce((acc, cur) => acc + cur);

  return averageHumanAge / humanAgeArr.length;
}

console.log(calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
