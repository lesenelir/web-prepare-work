const url = 'https://raw.githubusercontent.com/lesenelir/js-promise/master/02-Promise%E4%BD%BF%E7%94%A8/pic/01-Promise%E5%9F%BA%E6%9C%AC%E6%B5%81%E7%A8%8B.png'


function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error('图片加载失败'))
    }
    img.src = src
  })
}

loadImg(url).then(
    value => {
      console.log(value.width)
      return value
    }
).then(
    value => {
      console.log(value.height)
    }
).catch(
    reason => {
      console.log(reason)
    }
)

;(async function () {
  // 同步写法
  const img = await loadImg(src)
  console.log(img.height, img.width)
})()

