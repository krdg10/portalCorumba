const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const multer  = require('multer')
const allowCors = require('./cors')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
const sharp = require('sharp')

const Post = require('../api/post/post')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/')
    },
    filename: function (req, file, cb) {
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1)
        // cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
        // mudei isso aqui pra mudar como o nome é salvo. Ai a outra soluçao é o lance de salvar o id como tipo de uma imagem salva aqui num outro post e pesquisar por ela, ou entao mandar o objeto mas n sei como. ver isso dps
        cb(null, file.originalname)
    }
  })

  
server.listen(port, function() {
    console.log(`Backend is running on ${port}.`)

})

server.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });


server.use('/assets', express.static('public'))

var upload = multer({ storage: storage })


//  server.post('/file/:id', upload.single('imagem'), function (req, res, next) { tava assim pra passar o id. Acessado por params.id
server.post('/file', upload.single('imagem'), function (req, res, next) {

    /**
     * Salvar no banco de dados os dados do arquivo
     */
    console.log(req)


    
    /* req.file.path.substr(req.file.path.lastIndexOf('.') + 1)
   console.log(ext)
    var image = new Post({ extension: ext })
    image.save(function (err) {
      if (err) return handleError(err)

      // saved!
    })
    console.log('.'+image._id)
    */
  
  })

  server.use('/public', express.static('public/'))
  server.use('/assets', express.static('public'))

module.exports = server