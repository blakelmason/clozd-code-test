const path = require('path')
const express = require('express')
const server = express()

server.use(express.static('client/build'))

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

server.listen(5000, () => {
  console.log('server started on port 5000')
})
