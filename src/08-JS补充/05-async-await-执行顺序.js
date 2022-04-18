// async 中 对于 await rejected内容要用 try catch
async function fn() {
  const data = Promise.reject(1)
  try {
    const p = await data
    console.log(p)
  } catch (e) {
    console.log('error:', e)
  }
}

fn()


console.log(1)
async function test() {
  console.log(2)
  const data = await new Promise((resolve) => {resolve(3)})
  console.log(data)
  console.log(4)
}

test()
setTimeout(() => {
  console.log(5)
}, 1000)

console.log(6)

// 1 2 6 3 4 5


async function async1() {
  console.log('async1 start'); // 2
  await async2();
  console.log('async1 end'); // 6
}
async function async2() {
  console.log('async2'); // 3
}
console.log('script start'); // 1
setTimeout(function() {
  console.log('setTimeout'); // 8
}, 0)
async1();
new Promise(function(resolve) {
  console.log('promise1'); // 4
  resolve();
}).then(function() {
  console.log('promise2'); // 7
});
console.log('script end'); // 5

// await会阻塞后面的任务，即下一行代码 await同行的代码会立即执行
// async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

