exports.getMe = async (req, res) => {
    try {
      const professor = await Professor.findById(req.professor).select('-senha'); // Não retorna a senha
      res.json(professor);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erro no servidor');
    }
  };
  