const db = require("../models")

Livros = db.livros;
const Op = db.sequelize.Op; //redução de código

exports.create = (req, res) => {
    //Validade Request
    if (!req.body.nome) {
        res.status(400).send({
            message: "Título do livro não pode ser vazio!"
        })
        return;
    }

    //create Livro
    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        sinopse: req.body.sinopse,
        lancamento: req.body.lancamento,
        aluguel: req.body.aluguel,
        status: req.body.status ? req.body.status : false,
    }

    //Cadastrando livros
    Livros.create(livro)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erro interno ao criar o cadastrar livro"
            });
        });
};

//Pesquisando livros
exports.findAll = (req, res) => {
    Livros.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erro interno ao buscar os livros"
            });
        });
};
//Buscar livros por status
exports.findAllStatus = (req, res) => {
    Livros.findAll({ where: { status: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erro interno!"
            });
        });
};
//Busca por autor
exports.findByAutor = (req, res) => {
    const autor = req.params.autor;

    Livro.findByAutor({ where: { autor: autor } })
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "Autor não encontrado" })
            }
            res.send(data);
        })
        .catch((er) => {
            res.status(500).send({
                message: err.message || "Erro ao buscar o Autor :${autor}"
            });
        });
};
//Apagar todos os livros cadastrados
exports.deleteAll = (req, res) => {
    Livros.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} livros cadastrados deletados com sucesso` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erro ao deletar todos os cadastros"
            });
        });
};
