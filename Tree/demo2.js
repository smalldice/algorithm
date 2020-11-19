const { createNumTree } = require('./BST')

function inOrder(node) {
  // 中序遍历
  // 1. 先遍历左节点
  // 2. 打印当前节点
  // 3. 遍历右节点
  // 4. 从1开始
  if (node !== null) {
    inOrder(node.left)
    console.log(node.show() + ' ')
    inOrder(node.right)
  }
}

const nums = createNumTree()

inOrder(nums.root)
console.log(nums)
