/**
 * 深拷贝
 *
 */

const obj1 = {
  age: 20,
  name: 'lesenelir',
  address: {
    city: 'New York'
  },
  arr: ['a', 'b', 'c']
}

// 深拷贝

/**
 *
 * @param obj 传递对象属性对应的值 age的20 name的'lesenelir'
 */
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { // 只拷贝对象自身的属性，不拷贝原型上的属性
      result[key] = deepClone(obj[key])
    }
  }

  return result
}


const obj2 = deepClone(obj1)
console.log(obj2)
obj2.address.city = "Guangzhou"
console.log(obj2.address.city)
