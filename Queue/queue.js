class Queue {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    this.dataStore.shift()
  }

  front() {
    this.dataStore[0]
  }

  back() {
    this.dataStore[this.dataStore.length - 1]
  }

  toString () {
    let str = ''
    this.dataStore.forEach(element => {
      str += element + '\n'
    })
    return str
  }

  empty() {
    return !!this.dataStore.length
  }
}
