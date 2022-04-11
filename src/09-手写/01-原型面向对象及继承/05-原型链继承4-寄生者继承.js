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

// 子类型的原型为父类型的实例对象
Sub.prototype = Object.create(Super.prototype) // Sub.prototype.__proto__ === Super.prototype
// 相当于重写了当前Sub.prototype；此时新创建了Sub.prototype
console.log(Sub.prototype.__proto__ === Super.prototype)

Sub.prototype.constructor = Sub

let sub1 = new Sub()
let sub2 = new Sub()
sub1.say()

sub1.a = 222
console.log(sub1.a)
console.log(sub2.a)

sub2.b.push(4)
console.log(sub2.b)
console.log(sub1.b)


