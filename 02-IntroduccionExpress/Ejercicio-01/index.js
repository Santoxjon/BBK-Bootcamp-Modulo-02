const express = require('express');
const SERVIDOR = express();

SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    res.send(`<h1>Hola Mundo</h1><h2>desde express</h2>`);
});