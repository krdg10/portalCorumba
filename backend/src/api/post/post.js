const restful = require('node-restful')
const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    description: {type: String, required: true},
    tipo: {type: String, required: true},
    done: {type: Boolean, default: false},
    name: {type: String},
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Post', postSchema)

