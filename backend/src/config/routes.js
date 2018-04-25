const express = require('express')

module.exports = function(server){

    const router = express.Router()

    server.use('/api', router)


    const postService = require('../api/post/postService')
    postService.register(router, '/posts')

}