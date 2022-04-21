function Person(name, age) {
  this.name = name
  this.age = age
}

let x = Object.create(Person.prototype)
console.log(x)
console.log(x.__proto__ === Person.prototype)

// Note: a = Object.create(b)
//       意思是： a的__proto__属性指向b对象



// Object.prototype.toString() 每一个对象都有一个toString方法
let p1 = new Person('lee', 18)
console.log(p1)
console.log(p1.toString()) // [object Object]
