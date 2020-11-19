// 后序
// 先遍历访问叶子节点， 从左树到右树， 再到根节点

const { createNumTree } = require('./BST')

function postOrder(node) {
  if (node !== null) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show())
  }
}

const nums = createNumTree()
console.log('postOrder traversal:')
postOrder(nums.root)
console.log(nums)
