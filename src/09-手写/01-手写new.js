/**
 *  new关键字做的工作：
 *    创建一个新的obj -> 将对象与构建函数通过原型链链接 -> 将构建函数中的this绑定到新建对象obj -> 根据返回类型返回
 *
 * @param Func
 * @param args
 */
function myNew(Func, ...args) {
  const obj = {}
  obj.__proto__ = Func.prototype
  let result = Func.apply(obj, args) // 构建函数的this指向一个新对象
  return result instanceof Object ? result : obj
}

// Note: 如果new过程的函数 ， 返回一个对象，则函数执行时this指向返回的对象


function Person(name, age) {
  this.name = name
  this.age = age
}

let p = myNew(Person, 'lee', 19)
console.log(p)
