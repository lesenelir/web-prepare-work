let p1 = {
  name: '张三',
  hobby: this.hobby,
  play: function (sex, age) {
    console.log(`年龄为${age}岁，性别为${sex}的${this.name}喜欢${this.hobby}`)
  }
}

let p2 = {
  name: '李四',
  hobby: '踢足球'
}

p1.play.call(p2, '男', 20)
p1.play.apply(p2, ['男', 20])
let fn = p1.play.bind(p2, '男', 20)
fn()

// bind改变this指向后返回一个新的函数，不执行


// function Fn() {
//   console.log(this.clothes)
// }

const o = {
  clothes: "shirt",
  Fn: function () {
    console.log(this.clothes)
  }
}
o.Fn()
// Fn.call(o) // 本质是：在o对象里面，添加了一个方法


