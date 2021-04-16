module.exports = (sequelize, Sequelize) => {
  const Livro = sequelize.define('livro', {
    nome:{
      type: Sequelize.STRING
    },
    autor: {
      type: Sequelize.STRING
    },
    sinopse: {
      type: Sequelize.STRING
    },
     lancamento: {
      type: Sequelize.DATE
    },
    aluguel: {
      type: Sequelize.DATE
    },
    status:{
      type: Sequelize.BOOLEAN
    }
  });

  return Livro;
};