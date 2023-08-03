'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // const nested = [2, 4, [5, 6]];

// // const [a, , b] = nested;

// // console.log(a, b);

// const [a = 1, b = 2, c = 3] = [1, 2];

// console.log(a, b, c);

// 우리는 축구 베팅 앱을 만들고 있습니다(미국 친구들을 위한 축구 😅)!

// 특정 게임(아래)에 대한 웹 서비스에서 데이터를 얻는다고 가정합니다. 이 챌린지에서 우리는 데이터로 작업할 것입니다. 다음은 귀하의 작업입니다.

// 1. 각 팀에 대해 하나의 플레이어 배열을 만듭니다(변수 'players1' 및 'players2').
// 2. 모든 선수 배열의 첫 번째 선수는 골키퍼이고 나머지는 필드 선수입니다. Bayern Munich(팀 1)의 경우 골키퍼의 이름으로 하나의 변수('gk')를 만들고 나머지 10명의 필드 플레이어로 하나의 배열('fieldPlayers')을 만듭니다.
// 3. 양 팀의 모든 선수(22명)를 포함하는 'allPlayers' 배열을 만듭니다.
// 4. 경기 중 바이에른 뮌헨(1팀)은 교체 선수 3명을 투입했다. 따라서 모든 원래 team1 선수와 'Thiago', 'Coutinho' 및 'Perisic'을 포함하는 새 배열('players1Final')을 만듭니다.
// 5. game.odds 개체를 기반으로 각 홀수('team1', 'draw' 및 'team2'라고 함)에 대해 하나의 변수를 만듭니다.
// 6. 임의의 수의 플레이어 이름(배열이 아님)을 수신하고 총 골 수(전달된 플레이어 이름 수)와 함께 각각을 콘솔에 인쇄하는 함수('printGoals')를 작성합니다. )
// 7. 배당률이 낮은 팀이 이길 확률이 높습니다. if/else 문이나 삼항 연산자를 사용하지 않고 어느 팀이 이길 가능성이 더 높은지 콘솔에 출력합니다.

// 6에 대한 테스트 데이터: '데이비스', '뮐러', '레반도프스키' 및 '키미히' 선수를 사용합니다. 그런 다음 game.scored의 플레이어와 함께 함수를 다시 호출합니다.

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1)
// const [players1, players2] = game.players;

// // 2)
// const [gk, ...fieldPlayers] = players1;

// // 3)
// const allPlayers = [...players1, ...players2];

// // 4)
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5)
// const {
//   odds: { team1, team2, x: draw },
// } = game;

// // 6)

// const printGoals = (...arg) => {
//   console.log(`${arg.length}명이 골을 넣었습니다.`);
// };

// printGoals('Thiago', 'Coutinho', 'Perisic');

// // 7)
// team1 < team2 && console.log('team1이 이겼습니다!');
// team1 > team2 && console.log('team2이 이겼습니다!');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 축구 베팅 앱을 계속 진행하겠습니다!

// 1. game.scored 배열을 반복하고 골 번호와 함께 각 플레이어 이름을 콘솔에 인쇄합니다(예: "Goal 1: Lewandowski").
// 2. 루프를 사용하여 평균 홀수를 계산하고 콘솔에 기록합니다(평균 계산 방법은 이미 학습했습니다. 기억이 나지 않으면 확인하십시오)
// 3. 3개의 배당률을 콘솔에 출력하지만 다음과 같이 멋진 형식으로 출력합니다.
// 승률 바이에른 뮌헨: 1.33
// 무승부 승률: 3.25
// 승률 Borrussia Dortmund: 6.5
// 게임 개체에서 직접 팀 이름을 가져옵니다. 하드코딩하지 마세요("그리기" 제외). 힌트: 배당률과 게임 개체의 속성 이름이 어떻게 같은지 확인하세요 😉

// 보너스: 속성으로 득점한 플레이어의 이름과 값으로 골 수를 포함하는 'scorers'라는 개체를 만듭니다. 이 게임에서는 다음과 같이 표시됩니다.
// {
// 나르비: 1,
// 훔멜스: 1,
// 레반도프스키: 2
// }

// 행운을 빕니다 😀

// 1)
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2)
let total = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  total += odd;
}
console.log(total / odds.length);

// 3)
for (const [key, value] of Object.entries(game.odds)) {
  console.log(`${game[key] || 'x'}: ${value}`);
}
console.log(oddsEntries);

// bonus)
// 보너스 코드 찾아서 공부하기
