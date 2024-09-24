const Filme = require("../models/filmeModel")

const store = async (req, res) => {
    try{
        const content = await Filme.create(req.body)
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

const index = (req, res) => {
    const content = Filme.find().exec();

    res.json(content);
};

const show = (req, res) => {
    const content = Filme.findById(req.params.id).exec(); // toda funcao do mongoose tem que ter o exec no fim, só o create que não
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