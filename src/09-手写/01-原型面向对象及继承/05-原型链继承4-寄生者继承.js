// 寄生者继承 - 经典继承

function Super() {
  this.a = '111'
  this.b = [1, 2, 3]
}

Super.prototype.say = function () {
  console.log('a')
}


function Sub() {
  Super.call(this)
}

Sub.prototype.say2 = function () {
  console.log(333)
}

// 兼容性
// if (!Object.create) {
//   Object.create = function (obj) {
//     function Fn() {}
//     F.prototype = obj
//     return new Fn()
//   }
// }


if (!Object.create) {
  Object.create = function (obj) {
    function Fn() {}
    Fn.prototype = obj
    return new Fn()
  }
}

// Object.create() 创建一个新对象，使现有对象来提供新创建对象的__proto__
// Object.create 返回一个实例对象，该实例对象的__proto__指向Super.prototype
Sub.prototype = Object.create(Super.prototype) // Sub.prototype.__proto__ === Super.prototype
// 相当于重写了当前Sub.prototype；此时新创建了Sub.prototype
console.log(Sub.prototype.__proto__ === Super.prototype)

Sub.prototype.constructor = Sub

let sub1 = new Sub()
let sub2 = new Sub()
sub1.say()
// console.log(sub2.say2()) // 报错 因为重写了Sub上的方法

sub1.a = 222
console.log(sub1.a)
console.log(sub2.a)

sub2.b.push(4)
console.log(sub2.b)
console.log(sub1.b)


// Note: 重写了Sub.prototype原型，所以Sub原型上的方法要写在Object.create后面
