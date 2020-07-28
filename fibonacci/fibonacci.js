const fibonacci = function (n) {
  if (n < 1) {
    return 'OOPS'
  } else if (n <= 2) {
    return 1
  } else {
    let sequence = [1, 1]
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence[n - 1]
  }
}

module.exports = fibonacci
