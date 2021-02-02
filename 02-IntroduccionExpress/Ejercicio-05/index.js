const express = require('express');
const SERVIDOR = express();
let person = {
    name: "",
    lastname: "",
    age: ""
}


SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    res.send(`<p>${JSON.stringify(person)}</p>`);
});

SERVIDOR.get("/editName/:name", function (req, res) {
    person.name = req.params.name;
    res.send(`<p>${JSON.stringify(person)}</p>`);
});

SERVIDOR.get("/editLastName/:lastname", function (req, res) {
    person.lastname = req.params.lastname;
    res.send(`<p>${JSON.stringify(person)}</p>`);
});

SERVIDOR.get("/editAge/:age", function (req, res) {
    person.age = req.params.age;
    res.send(`<p>${JSON.stringify(person)}</p>`);
});