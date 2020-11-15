const HashTable = require('./HashTable1')
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
  table.put(name)
})

table.showDistro()

// console.log(table.get('Mike'))
/**
 * Cynthia 和 Clayton hash 值是一样的 之后Clayton 进入了列表，
 * 这种现象被称为碰撞
 * 使用霍纳算法，能够很好的解决碰撞
 */

/**
 * 1. 准备一个小的质数
 * 2. 计算每个字符串的ASCII值， 每次求和的时候先乘以这个质数，再加上ASCII值
 */
