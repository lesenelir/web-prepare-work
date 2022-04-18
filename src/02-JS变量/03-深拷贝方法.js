// 方法1： JSON.parse(JSON.stringify(obj))
// JSON.stringify()  -  将一个obj对象转换成JSON字符串
// JSON.parse()  -  将JSON字符串转换为obj对象
// 优点：
//  1. 可以进行二级以下的深度拷贝
// 缺点：
//  1. 函数无法拷贝
//  2. 正则无法拷贝
//  3. undefined无法拷贝
let obj1 = {
  a: 1,
  b: {
    x: 11
  }
}

let obj2 = JSON.parse(JSON.stringify(obj1))

obj1.a = 2 // 修改原来的属性值，不会影响到新的属性值
obj1.b.x = 22 // JSON 方法可以进行深层次的拷贝

console.log(obj2)


// 方法二、 Object.assign()
// 优点：
//   1. 可以拷贝函数
//   2. 可以拷贝正则
//   3. 可以拷贝undefined
// 缺点：
//    1. 不支持二级以下的深拷贝

let obj3 = {
  a: 1,
  person: {
    name: '111'
  }
}
let obj4 = {}
Object.assign(obj4, obj3)
obj3.a = 2
obj3.person.name = '222' // obj4深层跟着一起改变，所以不支持二级以下的深层次拷贝
console.log(obj4)


// ------------------------------
// 手写深拷贝 
let person = {
  name: 'lesenelir',
  age: 18,
  sayHi() {
    console.log("lesenelir")
  },
  father: {
    name: 'lesenelir_father',
    age: 20
  }
}

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else  {
    result = {}
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { // 保证不是原型的属性
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

let newPerson = deepClone(person)
console.log(newPerson)
person.name = 'newLesenelir'
person.age = 188
person.sayHi = function () {
  console.log("new SayHi")
}
person.father.name = 'NewLesenelir_Father'
person.father.age = 200
console.log(person)
console.log(newPerson)



function deepClone1(obj) {
  if (typeof obj !== 'object' || typeof obj === null) {
    return obj
  }
  let result
  if (Array.isArray(obj)) {
    result = []
  } else {
    result = {}
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone1(obj[key])
    }
  }
  return result
}

