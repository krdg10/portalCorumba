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
      cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
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


server.post('/file', upload.single('image'), function (req, res, next) {

    /**
     * Salvar no banco de dados os dados do arquivo
     */
    console.log(req.file)

    INPUT_path_to_your_images = 'img/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
    OUTPUT_path = 'public/img/'
    
    var ext = req.file.path.substr(req.file.path.lastIndexOf('.') + 1)
    console.log(ext)
    var image = new Post({ extension: ext })
    image.save(function (err) {
      if (err) return handleError(err)

      // saved!
    })
    console.log('.'+image._id)
    
  
    /**
     * Comprimir a imagem
     
    var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
   
    INPUT_path_to_your_images = 'img/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
    OUTPUT_path = 'public/img/'
    
    compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
      {jpg: {engine: 'tinify', key: "6ZCbK7yzQwMvxNNtcI7ljqpcvbY8cBRF", command: false}},
      {png: {engine: 'pngquant', command: ['--quality=20-50']}},
      {svg: {engine: 'svgo', command: '--multipass'}},
      {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
    })
    console.log(req.file.path)
  
    /**
     * Recortar imagem
     
    sharp(req.file.path)
    .resize(490, 280)
    .toFile(OUTPUT_path+image._id+'.'+ext)
  
    console.log(req.file.filename)
  
    /**
     * Excluir arquivos
     */
    /*fs.unlink(req.file.path, function (err) {
      if (err) throw err
      console.log('File deleted!')
    });
    */
  
      /**
     * Responder o cliente
     
      res.json({
      image: image._id+'.'+ext
      
    })
    */
  })

  server.use('/public', express.static('public/'))
  server.use('/assets', express.static('public'))

module.exports = server