function muti(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

const nums = [1, 2, 3]
nums.forEach(async (i) => {
  const res = await muti(i)
  console.log(res)
})

;(async function f() {
  for (const num of nums) {
    const res = await muti(num)
    console.log(res)
  }
})()

