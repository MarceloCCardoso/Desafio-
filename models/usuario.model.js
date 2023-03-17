const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  apresentacao: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
