// 查找给定值

const { createNumTree } = require('./BST')

const nums = createNumTree()
console.log(nums.find(38))
console.log(nums.min())
console.log(nums.max())
