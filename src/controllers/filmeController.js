const Filme = require("../models/filmeModel")

const store = (req, res) => {
    Filme.create(req.body)

    res.json();
}

const index = (req, res) => {
    const content = Filme.find().exec();

    res.json(content);
};

const show = (req, res) => {
    const content = Filme.findById(req.params.id).exec();
    res.json(content)
}

const update = (req, res) => {
    Filme.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json()
}

const destroy = (req, res) => {
    Filme.findByIdAndDelete(req.params.id).exec();
    res.json()
}

module.exports = {
    store, index, show, update, destroy
}