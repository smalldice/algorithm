// 线性探测法
// 一般情况下， 散列长度是待存储数据个数的1.5倍以及以下时， 使用开链法
// 当散列长度是 待存储数据个数的2倍以及2倍以上时， 使用线性探测法
// 线性探测法： 当碰撞时， 寻找散列后面可用的位置存储
class HashTable {
  constructor() {
    this.table = new Array(137)
    this.values = []
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

  put(key, data) {
    if (typeof key === 'string' && key.length) {
      let pos = this.simpleHash(key)

      if (this.table[pos] === undefined) {
        this.table[pos] = key
        this.values[pos] = data
      } else {
        while (this.table[pos] !== undefined) {
          pos++
        }
        this.table[pos] = key
        this.values[pos] = data
      }
    } else {
      throw new Error('plz put valid key')
    }
  }

  get(data) {
    let pos = this.simpleHash(data)
    const key = this.table[pos]
    if (key === data) {
      return this.values[key]
    } else {
      while (this.table[++pos] !== data) {
        pos++
      }
      return this.values[key]
    }
  }
}

module.exports = HashTable
