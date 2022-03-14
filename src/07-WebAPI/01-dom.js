const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新增节点
const newP = document.createElement('p')
newP.innerHTML = 'this is p1'
// 插入节点
div1.appendChild(newP)

