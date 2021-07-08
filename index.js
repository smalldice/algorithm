/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false

  var left = ['(', '[', '{']
  var right = [')', ']', '}']
  var stack = []

  for (var i = 0; i < s.length; i++) {
    var leftIndex = left.indexOf(s[i])
    console.log(leftIndex)
    if (leftIndex < 0) {
      var top = stack[stack.length - 1]
      var topIndex = left.indexOf(top)
      if (right[topIndex] === s[i]) {
        stack.pop()
      } else {
        stack.push(s[i])
      }
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0
}

console.log(isValid('([{{}}])'))
