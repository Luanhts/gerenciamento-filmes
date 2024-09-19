const Produtora = require("../models/produtoraModel")

const store = (req, res) => {
    Produtora.create(req.body)

    res.json();
}

const index = (req, res) => {
    const content = Produtora.find().exec();

    res.json(content);
};

const show = (req, res) => {
    const content = Produtora.findById(req.params.id).exec();
    res.json(content)
}

const update = (req, res) => {
    Produtora.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json()
}

const destroy = (req, res) => {
    Produtora.findByIdAndDelete(req.params.id).exec();
    res.json()
}

module.exports = {
    store, index, show, update, destroy
}