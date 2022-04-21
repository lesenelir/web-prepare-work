// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
// Object.assign(target, ...sources)



const o1 = { a: 1, b: 1, c: 1 }
const o2 = { b: 2, c: 2 }
const o3 = { c: 3 }

const obj = Object.assign({}, o1, o2, o3) // 目标对象target是一个空对象  并把该target 赋值给obj变量



// Note： 1. 第一个参数对象的属性，如果具有相同的key会被后面的相同key的值覆盖  【可以做同名属性的替换】
//        2. Object.assign只是浅拷贝，如果拷贝的属性值的一个对象的引用，拷贝的也只是地址
//        3. 合并多个对象


