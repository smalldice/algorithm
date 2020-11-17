const BST = require('./BST')

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

const nums = new BST()

nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)

console.log('inOrder traversal:')
inOrder(nums.root)
console.log(nums)
