
// 手写深拷贝

/**
 *
 * @param obj
 */
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { // 保证key不是原型上的
      result[obj] = deepClone(obj[key])
    }
  }

  return result
}


