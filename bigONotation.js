//Big O(1) example:

function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

console.log(addUpTo(6))

//Big O(n) example:

function anotherAddUpTo(n) {
  return n * (n + 1) /2;
}

console.log(anotherAddUpTo(6))

//O(1) space complexity example, sums the numbers in an array

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//O(n) space complexity example, loops through an array and returns a new array where each number in the previous array is doubled

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr;
}

