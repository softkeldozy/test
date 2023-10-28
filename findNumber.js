/* Given an unsorted array of n elements, find if the element k is present in the array or not.

write a findNumber function  It has 2 parameters:

1. An array of integers, arr, denoting the elements in the array.
2. An integer, k, denoting the element to be searched in the array.

The function must return a string "YES" or "NO" denoting if the element is present in the array or not.

Input Format

The first line contains an integer n, denoting the number of elements in the array arr.

Each line i of the n subsequent lines (where 0 <= i < n) contains an integer describing arr[i].

The next line contains an integer, k, the element that needs to be searched.

Constraints
1 <= n <= 10^5
1 <= arr[i] <= 10^9

Output Format
The function must return a string "YES" or "NO" denoting if the element is present in the array or not. This is printed to console.log.

Using Javascript to solve the given problem */

function findNumber(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return "YES";
    }
  }
  return "NO";
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(findNumber(arr, k)); 