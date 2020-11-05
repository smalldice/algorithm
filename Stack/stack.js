// 1. 构造函数内有一个空数组
// 2. 有代表当前元素的下标
// 3. push方法 往栈内添加一个元素 下标+1
// 4. pop方法 将栈顶元素移出， 下标-1
// 5. peek方法， 获取栈顶元素 （数组最后一个元素）
// 6. clear方法， 清除所有元素， 下标=0
// 7. length方法， 获取栈元素个数

class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }

  push(element) {
    this.dataStore[this.top++] = element
  }

  pop() {
    --this.top
    return this.dataStore.pop()
  }

  peek() {
    return this.dataStore[this.top - 1]
  }

  clear() {
    this.top = 0
    this.dataStore.length = 0
  }

  length() {
    return this.top
  }
}

module.exports = Stack
// test
// const s1 = new Stack()

// s1.push('1')
// s1.push('2')
// s1.push('3')
// s1.pop()
// s1.pop()
// s1.push('4')
// console.log(s1.peek())
// console.log(s1.dataStore)
