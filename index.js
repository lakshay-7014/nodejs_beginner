// Import the express module
const express = require('express')

// Create an instance of express
const app = express()

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/about', (req, res) => {
  res.send('This is a simple Express application.')
})

// Start the server on port 3000
app.listen(8000, () => {
  console.log('Server is running on http://localhost:3000')
})
