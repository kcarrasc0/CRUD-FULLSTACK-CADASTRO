const Professor = require('../models/Professor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Função de login
exports.login = async (req, res) => {
  const { email, senha } = req.body;
  
  try {
    const professor = await Professor.findOne({ email });
    if (!professor) {
      return res.status(400).json({ msg: 'Credenciais inválidas.' });
    }

    // Verifica a senha
    const isMatch = await bcrypt.compare(senha, professor.senha);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Senha incorreta.' });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: professor._id },
      process.env.JWT_SECRET,  // Defina uma chave secreta no .env
      { expiresIn: '1h' }
    );

    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};
