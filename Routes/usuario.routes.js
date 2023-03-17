const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model.js');

// Cria um novo usuário
router.post('/', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const resultado = await usuario.save();
    res.status(201).send(resultado);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.send({ usuarios });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Lista um usuário pelo seu ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    res.send(usuario);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Atualiza um usuário pelo seu ID
router.put('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    res.send(usuario);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Exclui um usuário pelo seu ID
router.delete