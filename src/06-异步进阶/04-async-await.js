async function async1() {
  console.log('async1 start') // 2
  await async2()
  // await的后面可以看作是callback里的内容，即异步
  // 类似于event loop setTimeout
  console.log('async1 end') // 5
}


async function async2() {
  console.log('async2') // 3
}


console.log('script start') // 1
async1()
console.log('script end') // 4

