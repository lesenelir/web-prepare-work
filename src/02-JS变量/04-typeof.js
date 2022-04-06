console.log(typeof String)
console.log(typeof Function)
console.log(typeof Array)
console.log(typeof [])
console.log(typeof 1)
console.log(typeof {})


console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(123))
console.log(Object.prototype.toString.call(new Error()))



// 利用Object.prototype.toString方法手动封装typeof

function getType(data) {
  return typeof data ==='object' ? Object.prototype.toString.call(data).slice(1, 7)
      : typeof data
}

console.log(Object.prototype.toString.call([]))
console.log(getType([]))
