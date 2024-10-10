const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Caso precise lidar com CORS
const alunosRouter = require('./routes/alunos'); // Supondo que esse é o arquivo onde o CRUD está

const app = express();

app.use(cors()); // Ativando CORS, caso necessário
app.use(express.json()); // Para permitir o parsing de JSON

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/alunos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conexão ao MongoDB estabelecida com sucesso');

  // Iniciar o servidor Express apenas após a conexão
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
  process.exit(1); // Encerrar o processo caso a conexão falhe
});

// Rotas
app.use('/api/alunos', alunosRouter);


