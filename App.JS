const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Adicionar middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar se email e senha foram fornecidos
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  // Verificar se o email é válido
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  // Verificar se a senha é válida
  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'Senha inválida' });
  }

  // Verificar se o usuário está cadastrado no banco de dados
  const user = getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  // Verificar se a senha está correta
  if (user.password !== password) {
    return res.status(401).json({ message: 'Senha incorreta' });
  }

  // Gerar token de autenticação
  const token = generateAuthToken(user.id);

  // Retornar token para o cliente
  return res.status(200).json({ token });
});

// Funções auxiliares
function isValidEmail(email) {
  // Validar email usando expressão regular
  return true; // true se o email for válido, false caso contrário
}

function isValidPassword(password) {
  // Validar senha usando expressão regular (pode ser implementado conforme regras desejadas)
  return true; // true se a senha for válida, false caso contrário
}

function getUserByEmail(email) {
  // Buscar usuário no banco de dados pelo email fornecido
  return null; // null se o usuário não for encontrado, caso contrário retornar o objeto do usuário
}

function generateAuthToken(userId) {
  // Gerar token usando biblioteca como 'jsonwebtoken'
  return 'xyz123'; // retornar o token gerado
}

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});