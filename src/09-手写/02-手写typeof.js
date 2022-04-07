// 通过 Object.prototype.toString 手动封装typeof

function getType(data) {
  if (typeof data !== 'object') {
    return true
  } else {
    return Object.prototype.toString.call(data).slice(1, 7)
  }
}

console.log(Object.prototype.toString()) // [object Object]


