const p1 = new Promise((resolve, reject) => {

})
console.log(p1) // pending


const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  })
})
console.log(p2) // pending
setTimeout(() => {
  console.log(p2) // resolved
})


const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  })
})
console.log(p3) // pending
setTimeout(() => {
  console.log(p3) // rejected
})


const p4 = Promise.resolve(100)
console.log(p4) // resolved 100
p4.then(value => console.log(value))


const p5 = Promise.reject('err')
console.log(p5) // rejected 'err'
p5.catch(reason => console.log(reason))
