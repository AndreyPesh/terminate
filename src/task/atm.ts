let countPay = 23;
const notes = [
  5, 10, 50, 100, 5, 100, 10, 5, 5, 100, 50, 5, 10, 10, 5, 5, 5, 50, 100, 10,
  10, 10, 100, 5
];

let result = 0;

while (countPay >= 0) {
  const currentNote = notes[countPay];
  switch (currentNote) {
    case 5: {
      result += 1;
      break;
    }
    case 10: {
      result -= 1;
      break;
    }
    case 50: {
      result -= 9;
      break;
    }
    case 100: {
      result -= 19;
    }
  }
  countPay -= 1;
}

console.log('Count coins: ',Math.abs(result));
