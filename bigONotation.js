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