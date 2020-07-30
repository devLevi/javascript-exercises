const people = [
  {
    name: 'Carly',
    yearOfBirth: 1066,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

let findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    )
    if (oldestAge < currentAge) return currentPerson
    else return oldest
    // oldestAge < currentAge ? currentPerson : oldest
  })
}

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear()
  }
  return death - birth
}

let oldOne = findTheOldest(people)
console.log(oldOne)
// module.exports = findTheOldest
