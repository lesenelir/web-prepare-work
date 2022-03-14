// 通用的事件绑定函数
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}


const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', (event) => {
  console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
})


// 事件冒泡
const p1 = document.getElementById('p1')
const body = document.body
bindEvent(p1, 'click', event => {
  // event.stopPropagation() // 阻止冒泡
  alert('激活')
})

bindEvent(body, 'click', event => {
  console.log('body clicked')
  console.log(event.target)
  alert('取消')
})


// 事件代理
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', event => {
  event.preventDefault() // 阻止默认行为
  event.stopPropagation() // 阻止冒泡

  const target = event.target
  if (target.nodeName === 'A') {
    console.log(target.innerHTML)
  }

})


// 通用事件绑定函数第二种写法：
function bindEvent2(elem, type, selector, fn) {
  if (fn === null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      // 代理绑定
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}

