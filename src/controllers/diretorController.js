const Diretor = require("../models/filmeModel")

const store = (req, res) => {
    Diretor.create(req.body)

    res.json();
}

const index = (req, res) => {
    const content = Diretor.find().exec();

    res.json(content);
};

const show = (req, res) => {
    const content = Diretor.findById(req.params.id).exec();
    res.json(content)
}

const update = (req, res) => {
    Diretor.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json()
}

const destroy = (req, res) => {
    Diretor.findByIdAndDelete(req.params.id).exec();
    res.json()
}

module.exports = {
    store, index, show, update, destroy
}