
// 节流： 一段时间内，只执行一次某个操作；过了这一段事件，还有操作的话，继续执行新的操作

function throttle(fn, delay) {
  let timer = null // timer当作节流阀
  return function () {
    if (!timer) { // timer为null进入，即不存在timer
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null // 重新设置timer，为了重新进入if语句，节流阀
      }, delay)
    }
  }
}

