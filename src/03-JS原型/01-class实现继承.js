// 父类
class Person {
  constructor(name) {
    this.name = name
  }

  eat() {
    console.log(`${this.name} eat something `)
  }

}

// 子类
class Student extends Person {
  constructor(name, number) {
    // super调用父类构造器
    super(name)
    this.number = number
  }

  sayHi() { // sayHi函数 本质是在Student.prototype上
    console.log(`姓名： ${this.name} 学号：${this.number} `)
  }
}

class Teacher extends Person {
  constructor(name, major) {
    super(name)
    this.major = major
  }

  teach() { // teach函数 本质是在Teacher.prototype上
    console.log(`${this.name} 教授 ${this.major}`)
  }
}


const jack = new Student('jack', 1)
console.log(jack.name)
console.log(jack.number)
jack.eat()
jack.sayHi()


const teacher = new Teacher('Lee', 'web')
console.log(teacher.name)
console.log(teacher.major)
teacher.eat()
teacher.teach()


console.log("==========================================")
// 类型判断 - instanceof
// A instanceof B   =   判断对象A是否是函数B的实例
// 如果对象A可以通过__proto__（顺着隐式原型）找到 B的显式原型也返回true

console.log(jack instanceof Student)
console.log(jack instanceof Person)
console.log(jack instanceof Object)


console.log("==========================================")
// class 类的本质是函数
console.log(typeof Person)
console.log(typeof Student)
// 原型链
// 只要是一个对象，就会有__proto__属性
console.log(Person.prototype === Student.prototype.__proto__)

