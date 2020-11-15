const HashTable = require('./HashTable')

const table = new HashTable()

let names = ['Mike', 'Jenny', 'Link']
let numbers = ['123123', '321321', '4321321']

names.forEach((name, i) => {
  table.put(name, numbers[i])
})

table.showDistro()

console.log(table.get('Mike'))
