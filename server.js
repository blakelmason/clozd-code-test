const path = require('path')
const fs = require('fs')
const axios = require('axios')
const express = require('express')

const usersFileLocation = path.join(__dirname, 'users.json')

startServer()

async function startServer() {
  const server = express()
  const PORT = process.env.PORT || 5000

  if (!fs.existsSync(usersFileLocation)) {
    try {
      await getUsers()
    } catch (err) {
      console.log(err)
    }
  }

  server.use(express.static('client/build'))

  server.get('/api/users', (req, res) => {
    const users = fs.readFileSync(usersFileLocation, 'utf-8')
    res.send(users)
  })

  server.put('/api/users', async (req, res) => {
    try {
      await getUsers()
      res.end()
    } catch (err) {
      res.status(500).send()
    }
  })

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })

  server.listen(PORT, () => {
    console.log('server started on port ' + PORT)
  })
}

async function getUsers() {
  try {
    const url = 'https://randomuser.me/api/?results=3500'
    const res = await Promise.all([axios.get(url), axios.get(url)])
    const combined = res[0].data.results.concat(res[1].data.results)
    fs.writeFileSync(usersFileLocation, JSON.stringify(combined))
  } catch (err) {
    console.log(err)
    console.log('could not get users')
  }
}
