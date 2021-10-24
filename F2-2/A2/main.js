const panel = document.querySelector('#data-panel')
const button = document.querySelector('button')
const userNumber = 3
const url = `https://randomuser.me/api?gender=female&results=${userNumber}`

button.addEventListener('click', e => {
  axios.get(url)
    .then(response => {
      for (let i = 0; i < userNumber; i++) {
        // 回傳的資料較為雜亂，先整理成比較整齊的格式
        const data = response.data.results[i]
        const user = {
          name: `${data.name.first} ${data.name.last}`,
          email: data.email,
          avatar: data.picture.large
        }

        // 把資料加到畫面上
        const div = document.createElement('div')
        div.classList.add("user-item")
        const htmlContent = `
        <h3>${user.name}</h3>
        <img src="${user.avatar}">
        <small>${user.email}</small>
      `
        div.innerHTML = htmlContent
        panel.append(div)
      }
    })
    .catch(error => console.log(error))
})
