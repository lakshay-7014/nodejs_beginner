const express = require('express')

const app = express()

// request to server
app.get('/', (req, res) => {
  //getting response from server
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/home', (req, res) => {
  res.send('Home')
})

// listen on 8000
app.listen(8000, () => {
  console.log('Server is running ')
})
