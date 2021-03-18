const path = require('path')
const express = require('express')

const server = express()
const PORT = process.env.PORT

server.use(express.static('client/build'))

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

server.listen(PORT, () => {
  console.log('server started on port ' + PORT)
})
