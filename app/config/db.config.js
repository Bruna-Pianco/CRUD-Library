module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "2021@bru",
    DB: "db_bibliotecadesafio",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    }
}