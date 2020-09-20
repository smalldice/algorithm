// var input = [1, 4, 3, 2]
// var tree = {
//   val: 1,
//   left: { val: 4, left: { val: 2, left: null, right: null }, right: null },
//   right: { val: 3, left: null, right: null }
// }
// var preorderTraversal = function (root) {
//   var result = []
//   var stack = []

//   stack.push(root)

//   while (stack.length) {
//     var node = stack.pop()
//     if (!node) continue
//     result.push(node.val)
//     if (node.right) stack.push(node.right)
//     if (node.left) stack.push(node.left)
//   }

//   return result
// }

// const res = preorderTraversal(tree)
// console.log(res)
