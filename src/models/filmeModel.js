const db = require("../db");

const Schema = db.Schema;

const filmeSchema = new Schema({
    titulo: {
        type: String,
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

const Filme = db.model("Filme", filmeSchema)

module.exports = Filme