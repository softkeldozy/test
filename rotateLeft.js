/* A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left.
Given an integer, d, rotate the array that many steps left and return the result.
d=4
n=5
sample input=1 2 3 4 5 

constraints 
1<=n<=10^5
1<=d<=n
1<=a[i]<=10^6 */




// function leftRotation(arr, d) {
//   let rotatedArr = arr.slice(d).concat(arr.slice(0, d));
//   return rotatedArr;
// }

// let arr = [1, 2, 3, 4, 5];
// let d = 4;
// let rotatedArr = leftRotation(arr, d);
// console.log(rotatedArr); // Output: [5, 1, 2, 3, 4]
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(arr, d) {
  // Write your code here
  let rotatedArr = arr.slice(d).concat(arr.slice(0, d));
  return rotatedArr;
}

let arr = [1, 2, 3, 4, 5];
let d = 4;
let rotatedArr = rotateLeft(arr, d);


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = rotateLeft(d, arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
