// 值类型的改变
let a = 1
let b = a

b = 2
console.log(a, b)

// 引用类型的改变
let a1 = {age: 20}
let b1 = a1
b1.age = 21
console.log(a1.age) // 21
