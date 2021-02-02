const express = require('express');
const SERVIDOR = express();

SERVIDOR.listen(3000);

SERVIDOR.get("/:limit", function (request, res) {
    let limit = +request.params.limit;
    res.send(`<p>Un número aleatorio entre 1 y ${limit} es -> ${~~(Math.random() * (limit - 1) + 1)}</p>`);
});