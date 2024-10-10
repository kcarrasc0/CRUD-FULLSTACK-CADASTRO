const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const TurmaController = require('../controllers/turmaController');

// Rota para criar uma turma (apenas professor autenticado)
router.post('/', auth, TurmaController.createTurma);

module.exports = router;
