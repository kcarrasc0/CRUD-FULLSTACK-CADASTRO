const express = require('express')
const router = express.Router()
const Aluno = require('../models/Aluno')

// Criação do CRUD = POST, GET, PUT, DELETE
// Cadastrando meu ALuno
router.post('/', async (req, res) => {
    const { name,cpf } = req.body;
    const newAluno = new Aluno({
        name, cpf
    })
    await newAluno.save()
    res.json(newAluno)
})

// Listar Todos meus Aluno
router.get('/', async (req, res) => {
    const alunos = await Aluno.find();
    res.json(alunos)
})

// Atualizar o cadastro do Aluno
router.put('/:id', async (req, res) => {
    const { name, cpf } = req.body
    const updateAluno = await Aluno.findByIdAndUpdate(req.params.id, { name, cpf }, { new: true })
    res.json(updateAluno)
})

// Deletar o cadastro de um Aluno
router.delete('/:id', async (req, res) => {
    await Aluno.findByIdAndDelete(req.params.id)
    res.json({ message: 'Aluno deletado com sucesso! ' })
})

module.exports = router