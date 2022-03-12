// 闭包隐藏数据，只提供API

function createCache() {
  const data = {}
  return {
    set: function (key, val) { // 返回数据，闭包中的数据被隐藏，不被外界访问
      data[key] = val // 内部函数使用了外部函数的数据
    },
    get: function (key) {
      return data[key]
    }
  }
}


const c = createCache()
c.set('a', 100)

console.log(c.get('a'))
