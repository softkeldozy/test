function calculateHourglassSum(arr) {
  let maxSum = -Infinity; // initialize the maximum sum as negative infinity

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      let sum = 0;

      // calculate the sum of the current hourglass
      sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      sum += arr[i + 1][j + 1];
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      // update the maximum sum if necessary
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}

// Example usage:
let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

let maxHourglassSum = calculateHourglassSum(arr);
console.log(maxHourglassSum); // Output: 7