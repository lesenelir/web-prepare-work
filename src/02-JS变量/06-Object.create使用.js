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

// Note:

// Object.create(a, b) 有两个属性，第一个属性是必须的，第二个属性是可选的
// 第一个参数是新建对象的原型对象   - 即 x.__proto__ = 第一个参数
// 第二个参数是新创建实例对象上的属性 - 即 x的属性是第二个参数
