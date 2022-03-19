// 'test.json'

const xhr = new XMLHttpRequest()
xhr.open('GET', 'test.json', true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      JSON.parse(xhr.responseText)
      alert(xhr.responseText)
    }
   }
}
xhr.send(null)
