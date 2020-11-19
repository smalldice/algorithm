// 从二叉树上删除节点
// 删除节点有3中case
// 删除叶子节点
// 删除节点只有左节点
// 删除节点有两个子节点最复杂

// step1
// 删除节点第一步是判断当前节点是否包含待删除的数据
// 如果包含， 则删除改节点
// 如果不包含， 则比较当前节点和待删除的数据

// step2
// 如果待删除数据小于当前节点上的数据则移至左节点继续比较；

// step3
// 如果待删除的数据大于当前节点上的数据则移至右节点继续比较；

// 如果待删除的节点是叶子节点， 则使其父节点指向他的链接为null

// 如果至包含一个节点， 其父节点指向他的子节点

// 如果待删除节点包含两个子节点， 有两种做法： 要么查找待删除节点左子树的最大值， 要么找右子树的最小值

// 这里定义两个方法，一个是remove 一个是removeNode

// remove 负责接收参数， removeNode负责移除节点

const { createNumTree } = require('./BST')

const nums = createNumTree()
console.log(nums)
function remove(node, data) {
  node.root = removeNode(node.root, data)
  return node
}

function getSmallest(node) {
  let curr = node

  while (node.left !== null) {
    curr = node.left
  }

  return curr
}

function removeNode(node, data) {
  if (node === null) {
    return null
  }

  if (data === node.data) {
    // 没有子节点的node
    if (node.left === null && node.right === null) {
      return null
    }

    // 没有左子节点的node

    if (node.left === null) {
      return node.right
    }

    // 没有右节点的node
    if (node.right === null) {
      return node.left
    }

    // 有两个节点的子节点
    let tempNode = getSmallest(node.right)
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)
    return node
  } else if (data < node.data) {
    node.left = removeNode(node.left, data)

    return node
  } else {
    node.right = removeNode(node.right, data)

    return node
  }
}

remove(nums, 99)

console.log(JSON.stringify(nums, null, 2))

remove(nums, 16)

console.log(JSON.stringify(nums, null, 2))
