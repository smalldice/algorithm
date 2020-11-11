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
    let current = this.head

    if (current.next === null || current.next === this.head.element) {
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
    if (curr.next === null) {
      curr.next = newNode
      newNode.next = curr
    } else if (curr.next.element === 'head') {
      curr.next = newNode
      newNode.next = this.head
    } else {
      newNode.next = curr.next
      curr.next = newNode
    }
  }

  findPrevious(item) {
    let current = this.head

    while (
      current.next !== null &&
      current.next.element !== item &&
      current.next.element !== 'head'
    ) {
      current = current.next
    }

    return current
  }

  remove(item) {
    let pre = this.findPrevious(item)
    pre.next = pre.next.next
  }

  display() {
    let curr = this.head

    while (curr.next !== null && curr.next.element !== 'head') {
      console.log(curr.next)
      curr = curr.next
    }
  }
}

module.exports = CircularLinkedList
