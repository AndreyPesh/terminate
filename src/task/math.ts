const str = '12+2*5-3-4+10*2-3+7';
// const minus = console.log(
//   str.split('*').forEach((num) => {
//     if (+num) console.log(num);
//   })
// );
// console.log(str.split('-'));
const numbers = str.match(/\d{1,}/g);
// const plus = str.split('+');
// const minus = str.split('-');
const operators = str.match(/[+*\/-]/g);

console.log(operators);
console.log(numbers);
// console.log(minus);
// console.log(plus);

let res = 0;

if (operators && numbers)
  for (let i = 0; i < operators.length; i++) {
    let shift = 0;
    switch (operators[i]) {
      case '+':
        res += +numbers[shift];
        shift++;
        break;
      case '-':
        res -= +numbers[shift];
        shift++;
        break;
      case '*':
        res += +numbers[shift] * +numbers[shift + 1];
        shift += 2;
        break;
    }
  }
console.log(res);

// for (let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

// const total = str.split('+');
// const total1 = str.split('-');
// const total2 = str.split('*');
// console.log(total);
// console.log(total1);
// console.log(total2);

let sum = 0;

// total.forEach(number => {
// if(+number) {
//   sum += +number
// }
// else {
//   const minus = number.split('-')
//   console.log(minus);
//   minus.forEach(num => {
//     if(+num) {
//       sum -= +num
//     } else {
//       const multiply = 0
//     }
//   })
// }
// console.log(number);
// })

// console.log(sum);
