// 列表实现
/**
 * 属性：
 *  listSize: 元素个数
 *  pos: 当前位置
 *  length: 返回列表中元素的个数
 * 方法：
 *  clear(): 清除所有元素
 *  toString(): 返回列表字符串形式
 *  getElement(): 返回当前位置的元素
 *  insert(): 在现有元素后插入
 *  append(): 在末尾插入
 *  remove(): 从列表中移除元素
 *  front(): 将列表当前的位置移动到第一个元素
 *  end(): 将列表当前的位置移动到最后一个元素
 *  pre(): 将当前位置向前移动一位
 *  next(): 将当前位置向后移动一位
 *  hasNext(): 判断后一位
 *  hasPrev(): 判断当前一位
 *  currPos(): 但会列表当前位置
 *  moveTo(): 将当前位置移动到指定位置
 */
class List {
  constructor() {
    this.dataStore = []
    this.listSize = 0
    this.pos = 0
  }

  clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i
      }
    }

    return -1
  }

  toString() {
    return this.dataStore
  }

  insert(element, after) {
    const insertPos = this.find(after)

    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize
      return true
    }

    return false
  }

  append(element) {
    this.dataStore[this.listSize++] = element
  }

  remove(element) {
    const index = this.find(element)

    if (index > -1) {
      this.dataStore.splice(index, 1)
      --this.listSize
      return true
    }

    return false
  }

  front() {
    this.pos = 0
  }

  end() {
    this.pos = this.listSize - 1
  }

  prev() {
    --this.pos
  }

  currPos() {
    return this.pos
  }

  next() {
    if (this.hasNext()) {
      ++this.pos
    }
  }

  moveTo(pos) {
    this.pos = pos
  }

  hasNext() {
    return this.pos < this.listSize
  }

  hasPrev() {
    return this.pos > -1
  }

  length() {
    return this.listSize
  }

  getElement() {
    return this.dataStore[this.pos]
  }

  contains(element) {
    return this.find(element) > -1
  }
}

module.exports = List
