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


let obj = {}
console.log(obj.toString())

// Note: 对于 Object 对象，直接调用 toString() 就能返回 [Object Object]
// 而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
