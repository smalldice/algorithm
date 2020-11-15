// 用数组实现一个散列
// 数组长度必须是质数？
// 碰撞如何解决？
// 散列函数的选择依赖于键值的数据类型
// 最简单的散列函数就是以数组的长度对键取余
// 为了减少碰撞， 因此数组的长度最好为质数
// 以质数长度数组为基准值 叫做留余数法

class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  simpleHash(data) {
    const H = 37
    let total = 0
    for (let i = 0; i < data.length; i++) {
      total += H * total + data.charCodeAt(i)
    }
    const pos = total % this.table.length
    return pos
  }

  showDistro() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, ': ', this.table[i])
      }
    }
  }

  put(data) {
    var position = this.simpleHash(data)
    this.table[position] = data
  }

  // get() {}
}

module.exports = HashTable
