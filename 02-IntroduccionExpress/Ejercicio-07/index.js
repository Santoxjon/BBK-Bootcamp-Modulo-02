const express = require('express');
const SERVIDOR = express();
let array = new Array(10).fill(0, 0);
let functions = require("./functions");

SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    let str = "";
    array.forEach(pos => {
        str += `<p>${pos}</p>`;
    });
    res.send(str);
});

SERVIDOR.get("/sum", function (req, res) {
    array[functions.getRandom()]++;
    res.redirect("/");
});