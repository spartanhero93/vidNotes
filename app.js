const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Map global promise - get rid of warning
mongoose.Promise = global.Promise
// Connect to mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/server')
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
)

// Index Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
// About Route
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
