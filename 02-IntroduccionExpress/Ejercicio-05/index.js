const express = require('express');
const SERVIDOR = express();

SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    res.send("hey");
});