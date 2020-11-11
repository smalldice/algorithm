// 字典排序

class Dictionary {
  constructor() {
    this.datastore = []
  }

  add(k, v) {
    this.datastore[k] = v
  }

  find(k) {
    return this.datastore[k]
  }

  remove(k) {
    delete this.datastore[k]
  }

  showAll() {
    Object.keys(this.datastore)
      .sort()
      .forEach((key) => {
        console.log(key, ':', this.datastore[key])
      })
  }

  count() {
    let n = 0
    Object.keys(this.datastore).forEach((k) => {
      ++n
    })
    return n
  }

  clear() {
    this.datastore = []
  }

  length() {
    return this.datastore.length
  }
}

module.exports = Dictionary
