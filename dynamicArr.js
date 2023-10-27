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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  let arr = [];
  let lastAnswer = 0;
  let answers = [];

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let type = query[0];
    let x = query[1];
    let y = query[2];
    let idx = (x ^ lastAnswer) % n;

    if (type === 1) {
      arr[idx].push(y);
    } else if (type === 2) {
      let size = arr[idx].length;
      lastAnswer = arr[idx][y % size];
      answers.push(lastAnswer);
    }
  }

  return answers;
}

let n = 2;
let queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
];

let result = dynamicArray(n, queries);
// console.log(result); 

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const q = parseInt(firstMultipleInput[1], 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  }

  const result = dynamicArray(n, queries);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
