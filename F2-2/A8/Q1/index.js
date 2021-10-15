// Q1_(1)說明：由於按鈕的type = "submit"代表按下按鈕後的預設行為是提交表單，
// 因此導致畫面尚未按照我們期望的渲染即被重新導向，因此需要透過preventDefault()去阻止表單提交的預設行為。

const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', event => {
  event.preventDefault()
  const name = input.value
  form.innerHTML = `<h3 class="display-3">Hi, ${name}</h3>`
})