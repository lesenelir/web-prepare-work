
// 防抖
function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    },delay)
  }
}


function throttle(fn, delay) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {  // 阀门打开
        fn.apply(this, arguments)
        timer = null // 阀门关闭
      }, delay)
    }
  }
}


