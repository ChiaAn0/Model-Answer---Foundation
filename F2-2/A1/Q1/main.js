const img = document.querySelector('.dog-image')

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => img.src = response.data.message)
  .catch(error => console.log(error))
