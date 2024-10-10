const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ProfessorController = require('../controllers/professorController');

// Rota protegida para obter dados do professor
router.get('/me', auth, ProfessorController.getMe);

module.exports = router;
