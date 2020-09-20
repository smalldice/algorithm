const movies = require('./movies.json').movies.map((movie) => movie.name)
const List = require('./list')
const Customer = require('./customer')
const { names } = require('./list-demo1')
const movieList = new List()
const customerList = new List()

function initData() {
  movies.forEach((movie) => {
    movieList.append(movie)
  })
}

// 打印列表
function displayList(list) {
  for (list.front(); list.hasNext(); list.next()) {
    const element = list.getElement()
    if (element instanceof Customer) {
      console.log(element.name, ',', element.movie)
    } else {
      console.log(element)
    }
  }
}

function checkout(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    const c = new Customer(name, movie)
    customerList.append(c)
    movieList.remove(movie)
  } else {
    console.log(movie, 'is not available')
  }
}
// step1 初始化数据
initData()
// 从names中获取名字租赁电影
checkout(names.getElement(), 'The GodFather', movieList, customerList)

displayList(movieList)
displayList(customerList)

names.prev()
checkout(names.getElement(), 'The GodFather', movieList, customerList) // The GodFather is not available
