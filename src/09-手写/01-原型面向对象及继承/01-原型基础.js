function Foo() {

}

let foo = new Foo()

// 函数对象
console.log(Foo.__proto__ === Function.prototype) // new Function  Foo是函数对象，即Function的实例

console.log(Object.__proto__ === Function.prototype) // new Object()


console.log("===================")

console.log(Function.prototype.constructor === Function) //

console.log(Function.__proto__ === Function.prototype) // 系统规定 Function是实例对象的同时也是构造函数


console.log("===================")

console.log(Foo.prototype.__proto__ === Object.prototype) // 所有函数原型对象都指向对象的原型
// Note： 因为函数原型对象是一个普通对象，普通对象的__proto__都指向Object.prototype


// Note： 区分Function.prototype 和 Object.prototype
//              new Function           new Object
