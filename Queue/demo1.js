// 分配舞伴

const people = require('./people.json')
const Queue = require('./queue')
const males = new Queue()
const females = new Queue()

class Dancer {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
}

function getDancers(females, males) {
  people.forEach((people) => {
    if (people.gender === 'female') {
      females.enqueue(new Dancer(people.name, people.gender))
    }

    if (people.gender === 'male') {
      males.enqueue(new Dancer(people.name, people.gender))
    }
  })
}

function dance(females, males) {
  console.log("let's party!")
  while (males.length() && females.length()) {
    let male = males.dequeue()
    let female = females.dequeue()
    console.log(
      `Hello Everyone, current pairs is the lady ${female.name} and the gentleman ${male.name} !\n`
    )
  }
}

getDancers(females, males)
dance(females, males)

if (!females.empty()) {
  console.log(`the lady ${females.front().name} is waiting to dance`)
}

if (!males.empty()) {
  console.log(
    males.length() === 1
      ? `the gentleman ${males.front().name}  is waiting to dance`
      : `the gentleman ${males.front().name} and ${
          males.length() - 1
        } man are waiting to dance`
  )
}
