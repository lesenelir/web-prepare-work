// // 1. 函数作为返回值
// function create() {
//   const a = 100
//   return function () {
//     console.log(a)
//   }
// }
//
// const fn = create()
// const a = 200
// fn() // 100

/**
 *  预编译，产生GO对象: {fn: undefined, a: undefined, create: function}
 *
 *  执行第9行产生create的AO对象 cAO: {a: undefined}
 *  执行第3行，     cAO: {a: 100}
 *  执行第4行，修改GO对象的fn变量 GO: {fn: function{console.log(a)}, a: undefined, create: function}
 *          此时[[scopes]]:
 *              0: cAO: {a: 100}
 *              1: GO: {fn: function{console.log(a)}, a: undefined, create: function}
 *  执行第10行，修改G0中的a属性值
 *          此时[[scopes]]:
 *              0: cAO: {a: 100}
 *              1: GO: {fn: function{console.log(a)}, a: 200, create: function}
 *
 *   优先调用[[scopes]]栈顶部的变量，即，fn使用的是cAO中的a变量
 */


console.log("=============================================================")


// 2. 函数作为参数
let a1 = 100
function fn1() {
  console.log(a1)
}

function print(fn) {
  let a1 = 200
  fn()
}
print(fn1) // 100


/**
 *    预编译，产生GO对象： GO: {a1: undefined, fn1: function, print: function}
 *    执行第1行，修改Go中的a1属性值 GO: {a1: 100, fn1: function, print: function}
 *    执行第44行，生成printAO对象 pAO: {fn: fn1, a1: undefined}
 *    执行第41，修改PAO对象: {fn: fn1, a1: 200}
 *      此时[[scopes]]:
 *        0: pAO:  {fn: fn1, a1: 200}
 *        1: GO: {a1: 100, fn1: function, print: function}
 *   执行第42行，调用fn 即为调用fn1 ，此时fn1 定义在GO对象中，找GO中的变量a1
 *
 */


// Note: 所有自由变量的查找，是在函数定义的地方，向上查找，不是在执行的地方。
