function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function sum(x) {
  if (x.length === 0) return 0
  else {
    let sum = x.reduce(function (a, b) {
      return a + b
    })
    return sum
  }
}

function multiply(array) {
  return array.length ? array.reduce((acc, nextItem) => acc * nextItem) : 0
}

function power(x, y) {
  return Math.pow(x, y)
}

function factorial(n) {
  let answer = 1
  if (n == 0 || n == 1) {
    return answer
  } else {
    for (let i = n; i >= 1; i--) {
      answer = answer * i
    }
    return answer
  }
  //   return n ? n * factorial(n - 1) : 1
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
