const p1 = Promise.resolve().then(() => {
  return 100
})
console.log('p1', p1) // resolved 触发后续 then 回调
p1.then(value => {
  console.log(value)
})


const p2 = Promise.resolve().then(() => {
  throw new Error('then error')
})
console.log('p2', p2) // rejected 触发后续 catch 回调
// p2.then(undefined, reason => {
//   console.log(reason)
// })
p2.catch(reason => {
  console.log(reason)
})


const p3 = Promise.reject('my error')
console.log('p3', p3)
p3.catch(reason => {
  console.log(reason)
})
