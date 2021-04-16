module.exports = (sequelize, Sequelize) => {
    const Locado = sequelize.define("locado", {
        nome: {
            type: Sequelize.STRING,
        },
        cpf: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN
        },
    });

    return Locado;

};