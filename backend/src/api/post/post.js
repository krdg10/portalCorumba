const restful = require('node-restful')
const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    description: {type: String, required: true},
    tipo: {type: String, required: true},
    hospedagemPremium: {type: Boolean, default: false},
    name: {type: String},
    rua: {type: String},
    bairro: {type: String},
    numero: {type: String},
    telefone: {type: String},
    email: {type: String},
    cep: {type: String},
    horario_funcionamento: {type: String},
    ondeIrPremium: {type: Boolean, default: false},
    alimentacaoPremium: {type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Post', postSchema)

