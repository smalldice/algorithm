const MySet = require('./Set')

const cis = new MySet()
const dmp = new MySet()

cis.add('Clayton')
cis.add('Jennifer')
cis.add('Danny')

dmp.add('Bryan')
dmp.add('Clayton')
dmp.add('Jennifer')

const diff = cis.difference(dmp)
diff.show()
