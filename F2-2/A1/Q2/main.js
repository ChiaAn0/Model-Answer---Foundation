const panel = document.querySelector('#data-panel')
const button = document.querySelector('button')
const url = 'https://randomuser.me/api/'

button.addEventListener('click', e => {
  axios.get(url)
    .then(response => {
      const user = response.data.results[0]
      const name = `${user.name.first} ${user.name.last}`
      const avatar = user.picture.large
      const email = user.email
      panel.innerHTML = `
      <h3>${name}</h3>
      <img src="${avatar}">
      <p>${email}</p>
    `
    })
    .catch(error => console.log(error))
})
