// 判断一个字符串是否回文（忽略空格）
const Stack = require('./stack')

function isPalindrome(str) {
  const s = new Stack()
  let newStr = ''
  str
    .replace(/\s/g, '')
    .split('')
    .forEach((char) => {
      s.push(char)
    })

  console.log(s)
  while (s.length()) {
    newStr += s.peek()
    s.pop()
  }

  return str.replace(/\s/g, '') === newStr
}

console.log(isPalindrome('hello'))
