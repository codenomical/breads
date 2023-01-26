// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
// console.log(PORT);
const app = express()

// console.log('__dirname', __dirname + '/views');

// MIDDLEWARE
app.set('views', __dirname + '/views') //dunder-score
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE Add
app.use(express.static('public'))
// MIDDLEWARE Add 01.25.23
app.use(methodOverride('_method'))


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
  })
  
// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
})

