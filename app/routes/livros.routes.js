module.exports = app => {
    const livros = require("../controllers/livros.controllers");
    var router = require("express").Router();

    router.post("/", livros.create);
    router.get("/", livros.findAll);
    router.get("/:status", livros.findAllStatus);
    router.get("/:autor", livros.findByAutor);
    router.delete("/", livros.deleteAll);

    app.use("/api/livros", router);

}