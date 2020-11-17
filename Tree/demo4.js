// 后序
// 先遍历访问叶子节点， 从左树到右树， 再到根节点

const BST = require('./BST')

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show())
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

console.log('postOrder traversal:')
postOrder(nums.root)
console.log(nums)
