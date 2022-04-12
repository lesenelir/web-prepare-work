// 借用构造函数方式继承

function Super() {
  this.arr = [1, 2, 3]
}

function Sub() {
  // 使用call重新制定this指向，不指定为window
  Super.call(this) // 拿的是构造函数的自身成员属性
}

let sub1 = new Sub()
let sub2 = new Sub()

sub1.arr.push(4)
console.log(sub1.arr)
console.log(sub2.arr)

// Note： 借用构造函数的问题：父类的原型方法无法获取
// 解决子类实例共享父类引用属性的问题
