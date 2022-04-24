// 防抖：对于事件触发n秒后才执行（延迟执行）+ 对于n秒内触发则重新计时

// fn的执行是在输入完毕以后执行
function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) { // 设定新的定时器之前去清空之前的定时器
      clearTimeout(timer)
    }
    timer = setTimeout(() => { // 保证系统中只有最后一个定时器
      // fn()
      fn.apply(this, arguments) // this指向当前对象执行者  argument是event对象 - 此时函数会立即执行
    }, delay)
  }
}

// setTimeout 的返回值是定时器的唯一标识


// Note: 防抖和节流都是需要绑定事件的，所以需要返回一个函数，且里面需要一个函数

// debounce 中的参数fn 是要监听的事件


let btn

btn.addEventListener('click', debounce(fn, 1000))
