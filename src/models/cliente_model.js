const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: Object, required: true },
  telefones: [String],
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;