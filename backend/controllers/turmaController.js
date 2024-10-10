const Turma = require('../models/Turma');

exports.createTurma = async (req, res) => {
  const { nome, alunos } = req.body;

  try {
    const novaTurma = new Turma({
      nome,
      alunos,
      professor: req.professor
    });

    await novaTurma.save();
    res.json(novaTurma);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};
