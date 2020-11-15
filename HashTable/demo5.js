const HashTable = require('./HashTable2')
const table = new HashTable()

const names = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan'
]

names.forEach((name) => {
  table.put(name, name)
})

table.showDistro()

console.log(table.get('Donnie'))
