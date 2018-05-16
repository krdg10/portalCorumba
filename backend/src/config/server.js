const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`Backend is running on ${port}.`)

})

server.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });

server.use('/assets', express.static('public'))

  

module.exports = server