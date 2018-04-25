const express = require('express')

module.exports = function(server){

    const router = express.Router()

    server.use('/api', router)


    const todoService = require('../api/post/postService')
    todoService.register(router, '/posts')

}