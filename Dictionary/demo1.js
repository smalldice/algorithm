const Dictionary = require('./Dictionary')

const pbook = new Dictionary()

pbook.add('mike', 123)
pbook.add('David', 346)
pbook.add('Cynthia', 456)
console.log(`David's extension : ` + pbook.find('David'))
pbook.remove('David')
pbook.showAll()
pbook.clear()
console.log(pbook.length(), pbook.count())
