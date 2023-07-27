'use strict';

// 스코프 체인
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     console.log(`나의 나이는 ${age} 입니다`);
//     if (birthYear === 1998) {
//       var name = '김민겸';
//     }
//     console.log(name);
//   }

//   printAge();
//   return age;
// }

// const firstName = '김민겸';

// calcAge(1998);

// 호이스팅 & TDZ
// console.log(name);
// console.log(add(1, 2));
// // console.log(age);
// // console.log(job);

// var name = '김민겸';
// let age = 25;
// const job = 'student';

// function add(a, b) {
//   return a + b;
// }

// // Example

// console.log(numProduct);

// if (!numProduct) deleteCart();

// var numProduct = 10;

// console.log(numProduct);

// function deleteCart() {
//   console.log('장바구니 모두 삭제');
// }

// this에 대해서
// console.log(this);

// function calcAge(birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// }

// calcAge(1998);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1998);

// const man = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// const woman = {
//   year: 2000,
// };

// man.calcAge();

// woman.calcAge = man.calcAge;

// woman.calcAge();

// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// add(2, 3);

let lastName = '김민겸';
let oldLastName = lastName;
lastName = '홍길동';

console.log(lastName, oldLastName);

const man = {
  name: '김민겸',
  age: 25,
  family: ['엄마', '아빠'],
};

const woman = Object.assign({}, man);

console.log(woman === man);
