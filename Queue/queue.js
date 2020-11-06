class Queue {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    return this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString() {
    let str = ''
    this.dataStore.forEach((element) => {
      str += element + '\n'
    })
    return str
  }

  empty() {
    return !this.dataStore.length
  }

  length() {
    return this.dataStore.length
  }
}

module.exports = Queue
