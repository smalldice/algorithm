// 循环链表， 链表最后一项的next指向head
// 循环链表基于单项链表
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = new Node('head')
  }

  find(item) {
    let current = this.head.next

    if (current.next === this.head.element) {
      return current
    }

    while (current.element !== item) {
      current = current.next
    }

    return current
  }

  insert(newElement, item) {
    const newNode = new Node(newElement)
    const curr = this.find(item)

    newNode.next = curr.next === 'head' ? this.head : curr.next
  }
}
