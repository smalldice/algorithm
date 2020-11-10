// 实现一个简单的公路所穿过的城市

// const SingleLList = require('./SingleLinkedList')
// const cities = new SingleLList()
const DoubleLinkedList = require('./DoubleLinkedList')
const cities = new DoubleLinkedList()

cities.insert('Conway', 'head')
cities.insert('Russellville', 'Conway')
cities.insert('Carlisle', 'Russellville')
cities.insert('Alma', 'Carlisle')
cities.display()
cities.remove('Carlisle')
cities.display()
