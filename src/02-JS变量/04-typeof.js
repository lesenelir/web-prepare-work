console.log(typeof String)
console.log(typeof Function)
console.log(typeof Array)
console.log(typeof [])
console.log(typeof 1)
console.log(typeof {})


console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(123))
console.log(Object.prototype.toString.call(new Error()))
console.log(Object.prototype.toString.call(function () {})) // [object Function]

// Object.prototype.toString() 每一个对象都有一个toString方法
console.log(Object.prototype.toString.call([]))
// Object.prototype.toString() 是一个字符串
console.log(typeof Object.prototype.toString.call([])) // string


// 利用Object.prototype.toString方法手动封装typeof

function getType(data) {
  if (typeof data !== 'object') {
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
  } else {
    return typeof data
  }
}

console.log(Object.prototype.toString.call([]))
console.log(getType([]))
console.log(getType(new Error))
