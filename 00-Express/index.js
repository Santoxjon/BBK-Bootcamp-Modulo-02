const express = require('express');
const SERVIDOR = express();

SERVIDOR.listen(3000);

SERVIDOR.get("/", function (req, res) {
    res.send("hey");
});

/*

const express = require('express');
const servidor = express();
servidor.listen(3000);
servidor.get("/bienvenida", function(request, res){
    res.send("Hola mundo")
})
servidor.get("/despedida", function(request, res){
    res.send("Adios mundo")
})
// http://localhost:3000/personas/Carol
// http://localhost:3000/personas/Peio/apellido/Murguia

servidor.get("/:name/apellido/:surname&age=:age&street=:street", function(request,res){
    let nombre = request.params.name
    let apellido = request.params.surname
    let age = request.params.age
    let street = request.params.street
    res.send(`<div style='background-color:orange'>Hello ${nombre} ${apellido} ${age} ${street}</div>`)
})

*/