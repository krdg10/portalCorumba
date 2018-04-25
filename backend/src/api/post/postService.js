const Post = require('./post')

Post.methods(['put', 'get', 'post', 'delete'])
Post.updateOptions({new: true, runValidators: true})

module.exports = Post