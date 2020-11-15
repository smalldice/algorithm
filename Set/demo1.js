const MySet = require('./Set')

const cis = new MySet()
cis.add('Mike')
cis.add('Clayton')
cis.add('Jennifer')
cis.add('Raymond')

const dmp = new MySet()

dmp.add('Raymond')
dmp.add('Cynthia')
dmp.add('Jonathan')

const it = cis.union(dmp)

it.show()
