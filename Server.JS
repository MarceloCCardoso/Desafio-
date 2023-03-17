const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao banco de dados');
}).catch((err) => {
  console.log('Erro ao conectar ao banco de dados', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo(a) ao cadastro de usuários' });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
