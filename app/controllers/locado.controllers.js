const db = require("../models")

Locado = db.locados;
const Op = db.sequelize.Op; //redução de código

exports.create = (req, res) => {
    //Validade Request
    if (!req.body.nome) {
        res.status(400).send({
            message: "Nome do cliente não pode ser vazio!"
        })
        return;
    }

    //create locado
    const locado = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        status: req.body.status ? req.body.status : false,
    }

    //Cadastrando cliente
    Locado.create(locado)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erro interno ao criar o cadastrar cliente!"
            });
        });
};

//Buscar cliente por status
exports.findAllStatus = (req, res) => {
    Locado.findAll({ where: { status: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Erro interno!"
            });
        });
};

//Deletando cliente
exports.deleteAll = (req, res) => {
    Locado.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} cliente cadastrados deletados com sucesso` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erro ao deletar todos os cadastros"
            });
        });
};