const db = require("../db")

const Schema = db.Schema;

const diretorSchema = new Schema ({
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
});

const Diretor = db.model("Diretor", diretorSchema);

module.exports = Diretor