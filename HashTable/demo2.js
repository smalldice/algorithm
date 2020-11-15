// demo1 展示了如何散列化字符串
// demo2 将展示如何散列化整形

const HashTable = require('./HashTable1')

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genStuData(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = ''

    for (let j = 0; j < 9; j++) {
      num += Math.floor(Math.random() * 10)
    }

    num += '' + getRandomInt(50, 100)
    arr[i] = num
  }
}

const studentNum = 10
const arrSize = 97
const idLen = 9
const students = new Array(studentNum)
genStuData(students)
students.forEach((student) => {
  console.log(student.substring(0, 8) + ' ' + student.substring(9))
})

const hTable = new HashTable()
students.forEach((stu) => {
  hTable.put(stu)
})
hTable.showDistro()
console.log('1'.charCodeAt(0))
