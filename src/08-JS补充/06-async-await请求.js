function One() {
  return 'One'
}

// function Two() {
//   setTimeout(() => {
//     return 'Two'
//   }, 3000)
// }

function Two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Two') // 3秒后 promise状态为fulfilled
    }, 3000)
  })
}

function Three() {
  return 'Three'
}

// function Fn() {
//   console.log(One())
//   console.log(Two()) // 不会等到定时器执行完后才执行，所以返回undefined // pending
//   // 要让Two执行完之后才让Three往下执行
//   console.log(Three())
// }

// 方法一
// function Fn() {
//   console.log(One())
//   const data = Two()
//   data.then(value => {
//     console.log(value)
//     console.log(Three())
//   })
// }
//
// Fn()

// 方法二
async function fn() {
  console.log(One())
  console.log(await Two())
  console.log(Three())
}

fn()

// await 会阻塞后面的代码


