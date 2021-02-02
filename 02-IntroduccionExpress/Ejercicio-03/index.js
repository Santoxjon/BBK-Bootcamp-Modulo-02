const express = require('express');
const SERVIDOR = express();

SERVIDOR.listen(3000);

let people = ['ionmi', 'ibai', 'lourdes', 'aitor'];

SERVIDOR.get("/persona", function (request, res) {
    let people_p = ``;
    people.forEach(person => {
        people_p += `<p>${person}</p>`;
    });
    res.send(people_p)
});

SERVIDOR.get("/persona/:parametro", function (request, res) {
    res.send(`<p>${people[people.indexOf(request.params.parametro)]}</p>`)
});