const caesar = function (str, key) {
  let lowerCaseStr = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var newStr = ''

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i]
    if (currentLetter === ' ') {
      newStr += currentLetter
      continue
    }
    if (/[a-zA-Z]/.test(currentLetter) === false) {
      newStr += currentLetter
      continue
    }
    let currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + key
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = newIndex + 26
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase()
    } else newStr += alphabet[newIndex]
  }
  return newStr
}

module.exports = caesar
