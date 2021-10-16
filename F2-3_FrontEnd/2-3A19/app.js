// Include express
const express = require('express')
const app = express()
const port = 3000
const pageTitles = ['Food', 'About', 'Portfolio', 'Contact']

// setting template engine
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting the route
app.get('/', (req, res) => {
  res.render('index', { pageTitle: '首頁', pageTitles })
})
app.get('/:pageTitle', (req, res) => {
  res.render('index', { pageTitle: req.params.pageTitle, pageTitles })
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
