const { BST } = require('./BST')

function genArr(length = 10) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 101))
  }

  return arr
}

function formatStrFromArr(arr) {
  let str = ''
  arr.forEach((item, i) => {
    str += `${item}${i > 0 && i % 10 === 0 ? '\n' : ' '}`
  })
  return str
}

const arr = genArr(50)

console.log(formatStrFromArr(arr))
const grades = new BST()

function inOrder(node) {
  if (node !== null) {
    inOrder(node.left)
    console.log(node.show(), node.count)
    inOrder(node.right)
  }
}

arr.forEach((k) => {
  grades.insert(k)
})

inOrder(grades.root)
