// 通过 Object.prototype.toString 手动封装typeof

function getType(data) {
  if (typeof data !== 'object') {
    return true
  } else {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
  }
}

console.log(Object.prototype.toString()) // [object Object]


console.log(Array.prototype.toString.call([1,2,3]))  // 原型链

