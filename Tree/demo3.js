// 先序
// 先访问根节点， 然后以同样的方式访问左树和右树
const BST = require('./BST')

function preOrder(node) {
  if (node !== null) {
    console.log(node.show())
    preOrder(node.left)
    preOrder(node.right)
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

console.log('preOrder traversal:')
preOrder(nums.root)
console.log(nums)
