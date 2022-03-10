let a = []

// typeof 是判断数据类型
console.log(typeof a) // object

// 方法1
console.log(Array.isArray(a)) // true

// 方法2
console.log(a instanceof Array) // true

let b = new Array()
/**
 *    某个数组名本质是数组的实例对象
 *    该数组名可以通过__proto__ 隐式原型链找 首先找到Array.prototype ，返回true
 */
console.log(b instanceof Array) // true
console.log(b instanceof Object) // true
