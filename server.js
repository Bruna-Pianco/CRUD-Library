const express = require('express');
const db = require('./app/models');
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({ message: "Biblioteca" });
});

db.sequelize.sync();

require("./app/routes/livros.routes")(app);
require("./app/routes/locado.routes")(app);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
});