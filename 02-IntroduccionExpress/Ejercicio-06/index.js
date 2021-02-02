const express = require('express');
const SERVIDOR = express();

let campers = ['Aitor', 'Aitziber', 'Alicia', 'Benjamin', 'Esteban', 'Galder', 'Ibai', 'Iñaki', 'Iñigo', 'Ionmi',
    'Iratxe', 'Irene', 'JK', 'Jon E', 'Jon S', "Kepa", "Leire", "Lourdes", "Luis", "Michelle", "Miguel", "Nuria",
    "Sergio", "Xavi"];

SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    let str = "";
    campers.forEach(camper => {
        str += `<p><b>${camper}</b></p>`;
    });
    res.send(str);
});

SERVIDOR.get("/add/:name", function (req, res) {
    campers.push(req.params.name);
    res.redirect('/');
});