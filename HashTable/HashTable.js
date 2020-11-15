// 用数组实现一个散列
// 数组长度必须是质数？
// 碰撞如何解决？
// 散列函数的选择依赖于键值的数据类型
// 最简单的散列函数就是以数组的长度对键取余
// 为了减少碰撞， 因此数组的长度最好为质数
// 以质数长度数组为基准值 叫做留余数法

// 开链法阻止碰撞
// 一维数组总有碰撞的可能性，因此使用二维数组来避免碰撞
// 二维数组在存储data的同时， 把key也保存下来
class HashTable {
  constructor() {
    this.table = new Array(137)
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array()
    }
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
      if (this.table[i][0] !== undefined) {
        console.log(i, ': ', this.table[i].join(' '))
      }
    }
  }

  put(key, data) {
    if (typeof key === 'string' && key.length) {
      const position = this.simpleHash(key)
      const chain = this.table[position]
      chain[chain.length] = key
      chain[chain.length] = data
    } else {
      throw new Error('plz put valid key')
    }
  }

  get(data) {
    const chain = this.table[this.simpleHash(data)]
    let index = 0

    while (index < chain.length) {
      if (chain[index] === data) {
        return chain[index + 1]
      }
      index += 2
    }

    return
  }
}

module.exports = HashTable
