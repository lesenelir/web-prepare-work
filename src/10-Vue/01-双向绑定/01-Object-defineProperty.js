let obj = {}

Object.defineProperty(obj, 'oneProperty', {
  get() {
    console.log('get')
  },
  set() {
    console.log('set')
  }
})

// 写入时触发
obj.oneProperty = 'sss'

// 读取时触发
obj.oneProperty


// let obj = {name: 'lesenelir'}
//
// Object.keys(obj).forEach((item) => { // Object.keys() 是返回一个数组，对象的key作为数组的值
//   console.log(item)
// })

