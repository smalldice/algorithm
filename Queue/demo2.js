// 使用队列排序
const Queue = require('./queue')
const num = [91, 46, 85, 15, 92, 35, 31, 22]
function createQueues() {
  const queues = []

  for (let i = 0; i < 10; i++) {
    queues.push(new Queue())
  }

  return queues
}

function distribute(nums, queues, digit) {
  // nums 数字列表, queues 二维队列, digit 各位还是10位， 取值位1 or 10
  for (let i = 0; i < nums.length; i++) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i])
    } else if (digit === 10) {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
    } else {
      break
    }
  }
}

function collect(queues, nums) {
  var i = 0
  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
}

const q = createQueues()

distribute(num, q, 1)
collect(q, num)

distribute(num, q, 10)
collect(q, num)

console.log(num)
