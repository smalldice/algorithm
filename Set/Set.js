// 集合

// 定义
// 不包含任何成员的集合是空集，全集是包含一切可能的成员
// 如果两个集合的成员完全相同，则称两个集合相等
// 如果一个集合所有成员都属于另外一个集合， 则前一集合称为后一集合的 子集

// 操作
// 并集， 两个集合合并
// 交集， 两个集合共同存在的成员称为一个新的集合
// 补集， 存在于1个而不存在于另一个的元素组成的新集合

class MySet {
  constructor() {
    this.datastore = []
  }

  add(data) {
    if (this.datastore.indexOf(data) === -1) {
      this.datastore.push(data)
      return true
    } else {
      return false
    }
  }

  remove(data) {
    const pos = this.datastore.indexOf(data)

    if (pos > -1) {
      this.datastore.splice(pos, 1)
      return true
    }

    return false
  }

  size() {
    return this.datastore.length
  }

  union(set) {
    // 并集操作
    const tempSet = new MySet()
    this.datastore.forEach((element) => {
      tempSet.add(element)
    })

    set.datastore.forEach((element) => {
      if (!tempSet.contains(element)) {
        tempSet.add(element)
      }
    })

    return tempSet
  }

  contains(data) {
    return this.datastore.indexOf(data) > -1
  }

  intersect(set) {
    // 求交集
    const tempSet = new MySet()
    this.datastore.forEach((myEle) => {
      if (set.contains(myEle)) {
        tempSet.add(myEle)
      }
    })
    return tempSet
  }

  subset(set) {
    // 当前集合是否是传入集合的子集
    if (this.size() > set.size()) return false

    return this.datastore.every((ele) => {
      return set.datastore.indexOf(ele) > -1
    })
  }

  difference(set) {
    // 返回属于当前集合， 而不属于传入集合的新集合
    const tmp = new MySet()
    this.datastore.forEach((myEle) => {
      if (!set.contains(myEle)) {
        tmp.add(myEle)
      }
    })

    return tmp
  }

  show() {
    console.log(this.datastore)
  }
}

module.exports = MySet
