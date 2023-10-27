function diagonalDifference(arr) {
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i];
    secondarySum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(primarySum - secondarySum);
}

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

console.log(diagonalDifference(matrix));