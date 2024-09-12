const axios = require('axios');

const cep_endereco = (req, res, next) => {
    // Remove caracteres indesejados do CEP
    axios.get(`https://viacep.com.br/ws/${req.body.endereco}/json/`)
    .then(resposta => {

       delete req.body.endereco

       req.body.endereco = resposta.data

       next()
    })
}

module.exports = cep_endereco