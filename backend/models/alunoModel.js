const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    cpf: {
        type:Number,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestampas: true
})

module.exports = mongoose.model('Aluno', alunoSchema);








