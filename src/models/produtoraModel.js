const { Schema } = require("mongoose")
const db = require("../db");
const { strict } = require("assert");

const Schema = db.Schema;

const produtoraSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    }
});

const Produtora = db.model("Produtora", produtoraSchema);

module.exports = Produtora