// 组合继承 （伪经典继承）

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

// 子类型的原型为父类型的实例对象
Sub.prototype = new Super() // 父类构造函数执行了两次
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

// Note: 组合继承的问题：父类的构造方法执行了两次
