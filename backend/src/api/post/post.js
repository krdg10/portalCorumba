const restful = require('node-restful')
const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    description: {type: String},
    tipo: {type: String},
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
    lazerPremium: {type: Boolean, default: false}, 
    homePremium: {type: Boolean},
    pesca: {type: Boolean},
    site: {type: String},
    imagemOne: {type: String},
    imagemTwo: {type: String},
    imagemThree: {type: String},
    imagemFour: {type: String},
    imagemFive: {type: String},
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Post', postSchema)

