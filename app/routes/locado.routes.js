module.exports = app => {
    const locados = require("../controllers/locado.controllers");
    var router = require("express").Router();

    router.post("/", locados.create);
    router.get("/:status", locados.findAllStatus);
    router.delete("/", locados.deleteAll);

    app.use("/api/locados", router);

}