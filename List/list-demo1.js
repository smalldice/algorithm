const List = require('./list')
console.log(List)
// step1
const names = new List()

names.append('C')
names.append('R')
names.append('B')

console.log(names.toString())
names.remove('R')
console.log(names.toString())

names.insert('R', 'B')
console.log(names.toString())

// step2
// names.clear()

// step3
console.log(names.contains('G'))

// step4
const names1 = new List()

names1.append('Clayton')
names1.append('Raymond')
names1.append('Cynthia')
names1.append('jennifer')
names1.append('Bryan')
names1.append('Danny')

// step5
// names1.front()
// console.log(names1.getElement())

// names1.next()
// console.log(names1.getElement())

// names1.next()
// names1.next()
// names1.prev()

// console.log(names1.getElement())

// step6

for (names1.front(); names1.hasNext(); names1.next()) {
  console.log(names1.getElement())
}

// step7
for (names1.end(); names1.hasPrev(); names1.prev()) {
  console.log(names1.getElement())
  console.log(names1.currPos())
}
