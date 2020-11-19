// 先序
// 先访问根节点， 然后以同样的方式访问左树和右树
const { createNumTree } = require('./BST')

function preOrder(node) {
  if (node !== null) {
    console.log(node.show())
    preOrder(node.left)
    preOrder(node.right)
  }
}

const nums = createNumTree()

console.log('preOrder traversal:')
preOrder(nums.root)
console.log(nums)
