const express = require('express');
const SERVIDOR = express();
let functions = require('./functions');

SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    let name = "Jon";
    res.send(functions.saludarEnExpress(name));
});