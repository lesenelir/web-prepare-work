
// 数组扁平化 - 方法1 使用for 循环
function flatten(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// 方法2： 使用reduce方法实现数组扁平化
function flattenTwo(arr) {
  return arr.reduce((acc, item) => {

  }, [])
}



console.log(Object.prototype.toString())





