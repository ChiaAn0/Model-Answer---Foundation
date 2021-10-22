const panel = document.querySelector('#data-panel')
const button = document.querySelector('button')
const url = 'https://randomuser.me/api?gender=female&results=3'

button.addEventListener('click', e => {
  axios.get(url).then(response => {
    // get data
    console.log(response)
    for (let i = 0; i < 3; i++) {
      const data = response.data.results[i]
      const user = {
        name: `${data.name.first} ${data.name.last}`,
        email: data.email,
        avatar: data.picture.large
      }
      console.log(user)

      // create user template
      let div = document.createElement('div')
      div.classList.add("user-item")
      let htmlContent = `
        <h3>${user.name}</h3>
        <img src="${user.avatar}">
        <small>${user.email}</small>
      `
      console.log(div.outerHTML)
      div.innerHTML = htmlContent
      panel.append(div)
    }  
  })
})