// 手写 call apply bind

Function.prototype.myCall = function (obj, ...args) {
  // 给当前对象填充一个方法fn ； this是当前 xx.myCall 的xx函数
  // 1. 将方法挂载到传入的obj
  // 2. 将挂载以后的方法调用
  // 3. 将我们添加的属性删除
  obj.fn = this                // 【关键】： 此处的this指向当前调用的myCall的函数  -  fun.myCall(obj, 1, 2)  this是fun
  obj.fn(...args)
  // 删除属性
  delete obj.fn
}


Function.prototype.myApply = function (obj, args = []) {
  if (args && args instanceof Array) {
    throw ('myApply 只接受数组作为参数')
  }
  obj.fn = this  // this是调用的函数
  obj.fn(...args)
  delete o.fn
}


Function.prototype.myBind = function (obj, ...args) {
  // 此处的this是 xxx.myBind 的 xxx
  let that = this
  return function (...args2) { // 此处也可以直接写 箭头函数 直接 写this 保存的是上一级的this 即 xxx
    obj.fn = that
    obj.fn(...args.concat(args2)) // 先进行数组拼接，再进行数组的解构
    delete obj.fn
  }
}

function show(...args) {
  console.log(this)
  console.log(args)
}

let bind = show.myBind({
  name: '11'
}, '22', '33')
bind('44')


// Note: call apply bind 实质：把内容绑定在一个对象上，当作方法
// call apply bind 是原型对象上的方法
