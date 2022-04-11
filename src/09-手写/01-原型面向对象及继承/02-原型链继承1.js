function Super() {
  this.a = '111'
  this.b = [1, 2, 3]
}

Super.prototype.say = function () {
  console.log('a')
}


function Sub() {

}

// 子类型的原型指向了父类型的实例对象 - 子类可以通过__proto__
Sub.prototype = new Super() // Sub.prototype.__proto__ = Super.prototype // Object.create(Super.prototype)
// Sub.prototype.__proto__ = Super.prototype // 取b报错
Sub.prototype.constructor = Sub
console.log(Sub.prototype.constructor)


let sub1 = new Sub()
let sub2 = new Sub()
sub1.say()

sub1.a = 222
console.log(sub1.a)
console.log(sub2.a)

sub2.b.push(4) // 原型链继承拿的是原型的属性
console.log(sub2.b)
console.log(sub1.b)

// Note: 原型链出现的问题：引用值共享的问题
// 原型对象的所有属性被实例对象共享
