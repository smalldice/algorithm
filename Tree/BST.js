// 二叉树
// 找出正确的节点算法如下
// 1. 设置根节点为当前节点
// 2. 如果待插入的节点的左节点数据小于当前节点， 则设新的当前节点为源节点的左节点， 反之， 执行第四部
// 3. 如果当前节点的左节点为null， 就将新的节点插入这个位置， 退出循环；反之 继续执行下一步循环；
// 4. 设置新的节点为当前节点的右节点
// 5. 如果当前节点为null, 就将新的节点插入这个位置， 退出循环； 反之， 执行下一次循环

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }

  show() {
    return this.data
  }
}

// 遍历BST
// 中序、先序、后序

// 中序
// 遍历按照节点上的键值， 以升序访问BST上的所有节点

// 先序
// 先访问根节点， 然后以同样的方式访问左树和右树

// 后序
// 先遍历访问叶子节点， 从左树到右树， 再到根节点

class BST {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data, null, null)

    if (this.root === null) {
      this.root = newNode
      return
    }

    let curr = this.root
    let parent

    while (true) {
      parent = curr
      if (data < curr.data) {
        curr = curr.left

        if (curr === null) {
          parent.left = newNode
          break
        }
      } else {
        curr = curr.right

        if (curr === null) {
          parent.right = newNode
          break
        }
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left)
      this.inOrder(node.right)
    }
  }
}

module.exports = BST
