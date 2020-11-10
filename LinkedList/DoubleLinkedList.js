// 双向链表

class Node {
  constructor(element) {
    this.element = element
    this.previous = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node('head')
  }

  find(item) {
    let currNode = this.head

    if (currNode.next === null) {
      return currNode
    }

    while (currNode.element !== item) {
      currNode = currNode.next
    }

    return currNode
  }

  insert(newElement, item) {
    const newNode = new Node(newElement)
    const current = this.find(item)
    // 根据find逻辑， 没找到对应item, 就将新元素插入到链表最后一节
    newNode.next = current.next ? current.next : null
    newNode.previous = current
    current.next = newNode
  }

  remove(item) {
    const current = this.find(item)

    current.previous.next = current.next ? current.next : null
    current.next && (current.next.previous = current.previous)
  }

  display() {
    let current = this.head
    while (current.next !== null) {
      console.log(current.next.element, current.next.previous.element)
      current = current.next
    }
  }
}

module.exports = DoubleLinkedList
