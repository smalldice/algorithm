// 图
// 有向图和无向图
// 顶点之间用边相连
// 顶点到顶点之间的边有方向称为有向图， 边可以加权重
// 点A -> 点B 的边数代表路径

class Vertex {
  constructor(label, wasVisited) {
    this.label = label // 数据标志
    this.wasVisited = wasVisited // 是否被访问过
  }
}

// 图的边表示方法为 邻接表 和 邻接表数组
// step1 创建图
/**
 * 数据示例
 * arr = []
 * arr[0] -> 0 -> [2]
 * arr[1] -> 1 -> [2]
 * arr[2] -> 2 -> [0, 1, 3 , 4]
 * arr[3] -> 3 -> [2]
 * arr[4] -> 4 -> [2]
 */

// step2 搜索图
/**
 * 1. 深度优先
 *   1.1 搜索从A 到 B 的路径
 *   1.2 回溯其他路径
 * 2. 广度优先
 */
class Graph {
  constructor(v) {
    this.vertices = v
    this.edges = 0
    this.adj = []
    this.marked = []
    this.edgeTo = []

    for (var i = 0; i < v; i++) {
      this.marked[i] = false
      this.adj[i] = []
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
  }

  show() {
    for (let i = 0; i < this.vertices; i++) {
      let str = i + ' ->'
      for (let j = 0; j < this.adj[i].length; j++) {
        if (this.adj[i][j] !== undefined) {
          str += this.adj[i][j] + ' '
        }
      }
      console.log(str)
    }
  }

  // 深度优先
  dfs(v) {
    this.marked[v] = true

    if (this.adj[v] !== undefined) {
      console.log('visited: ', v)
    }
    for (let w of this.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(w)
      }
    }
  }

  // 广度优先
  bfs(s) {
    let queue = []
    this.marked[s] = true
    queue.push(s)
    while (queue.length) {
      let v = queue.shift()
      if (this.adj[v] !== undefined) {
        console.log('visited: ', v)
      }

      for (let w of this.adj[v]) {
        if (!this.marked[w]) {
          // this.edgeTo[w] = v
          this.marked[w] = true
          queue.push(w)
        }
      }
    }
  }
}

function createGraph() {
  const g = new Graph(5)

  g.addEdge(0, 1)
  g.addEdge(0, 2)
  g.addEdge(1, 3)
  g.addEdge(2, 4)

  return g
}

exports.Graph = Graph
exports.createGraph = createGraph
