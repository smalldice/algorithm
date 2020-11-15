const MySet = require('./Set')

const it = new MySet()
it.add('Cynthia')
it.add('Clayton')
it.add('Jennifer')
it.add('Danny')
it.add('Jonathan')
it.add('Terrill')
it.add('Raymond')
it.add('Mike')

const dmp = new MySet()
dmp.add('Cynthia')
dmp.add('Raymond')
dmp.add('Jonathan')

if (dmp.subset(it)) {
  console.log('DMP is a subset of it')
} else {
  console.log('DMP is not a subset of it')
}

dmp.add('Shirley')

if (dmp.subset(it)) {
  console.log('DMP is a subset of it')
} else {
  console.log('DMP is not a subset of it')
}
