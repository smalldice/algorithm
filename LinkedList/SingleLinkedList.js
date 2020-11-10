// 链表是一组节点的集合，每一个节点都使用一个对象的引用指向他的后继
// 数组的缺点， 一些编程语言中数组的长度是固定，当数组的已经被填满时， 加入的新的元素会变得非常困难
// 数组中， 添加和删除元素非常麻烦， 在数组中间添加删除， 后面的元素要相对应的平移
// Javascript中的数组被实现成对象， 比起其他语言的数组效率很低

// 链表中， 第二个元素不说是第二个元素 而是说跟在前一个元素的后面， 并且链表终端指向null
// 链表中第一个节点叫做头节点

// 设计一个基于对象的链表

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = new Node('Head')
  }

  // 寻找对应的节点 如果找到就返回节点， 没找到就返回null
  find(item) {
    let currentNode = this.head

    if (currentNode.next === null) {
      return currentNode
    }

    while (currentNode.element !== item) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  insert(newElement, item) {
    if (newElement === null) return

    const newNode = new Node(newElement)
    const current = this.find(item)
    // 根据find逻辑， 没找到对应item, 就将新元素插入到链表最后一节
    newNode.next = current.next ? current.next : null
    current.next = newNode
  }

  remove(item) {
    let prevItem = this.findPrevious(item)

    prevItem.next = prevItem.next.next
  }

  findPrevious(item) {
    let currentNode = this.head

    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  display() {
    let currentNode = this.head

    while (currentNode.next !== null) {
      // 头节点不需要打印
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
}

module.exports = SingleLinkedList
