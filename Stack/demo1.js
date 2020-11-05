// 将 n 转为以 b（2-9） 为基数的数字
// 将10进制转为2-9任意进制

const Stack = require('./stack')

function mulBase(num, base) {
  const s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor((num /= base))
  } while (num > 0)

  let converted = ''
  while (s.length() > 0) {
    converted += s.pop()
  }

  console.log('convert ', num, ' to ', base, ' result: ', Number(converted))
}

mulBase(15, 2)
