let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

for (const key in arr) {
  console.log(arr[key])
}

for (const number of arr) { // 默认返回的是value
  console.log(number)
}

for (const index of arr.keys()) {
  console.log(index)
}

for (const number of arr.values()) {
  console.log(number)
}

for (const number of arr.entries()) {
  console.log(number)
}

for (const [key, value] of arr.entries()) {
  console.log(key, value)
}

arr.forEach((item, index) => {
  console.log(index + '-' + item)
})

arr.map((item, index) => {
  console.log(index + '-' + item)
})
