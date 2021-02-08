// 1- Crear una aplicación de servidor que tenga una lista de animales (un array con objetos) que tendrán nombre, edad y tipo de animal.
// Cuando vayamos a la raíz (ruta '/’) el servidor devolverá el HTML de la lista de animales.
// ---------------------------------------------------------------------------------------------------------------------------------------------
// 2- Crear una segunda ruta ('/sumar-animal') que recibirá por query el nombre, el tipo y la edad de un animal. Al recibirlo, se creará 
// un objeto de animal con su información y se añadirá a la lista de animales en el servidor.
// ---------------------------------------------------------------------------------------------------------------------------------------------
// 3- Si no habéis creado un formulario para enviar la información a la ruta ‘/sumar-animal’, Crear una tercera ruta ('/dejar-animal') en 
// la que mostraremos un formulario en el que el usuario de la página puede introducir el nombre, el tipo y la edad de un animal. Cuando 
// se haga click en el botón del formulario, se enviará la información introducida a la ruta ('/sumar-animal'). Si ya habéis creado el 
// formulario, no hace falta este paso.
// ---------------------------------------------------------------------------------------------------------------------------------------------
// 4- Crear una ruta ('/adoptar') que recibe un nombre de animal por parámetro de query. Cuando llegue una petición a esta ruta, eliminaremos 
// el animal con este nombre de la lista de animales que hay en el servidor.
// ---------------------------------------------------------------------------------------------------------------------------------------------
// 5- Añadir un formulario con un campo oculto con el nombre del animal y un botón que diga adoptar y mostrarlo en la lista de animales que 
// se muestra en la raíz (un formulario por animal, con un campo oculto con el valor del nombre del animal y un botón de enviar), cuando 
// pulsemos el botón, se enviará el formulario a la ruta ('/adoptar').
// ---------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./public/js/static');
const path = require('path');

app.listen(port);

app.get('/', function (req, res) {
    let str = "<h1>Animales</h1>";
    data.animals.forEach(animal => {
        console.log(animal);
        str += "<p style='display: inline'>" + animal.name + " | " + animal.age + " | " + animal.type;
        str += ` <form style='display: inline' action="/adoptar" method="get"><input type="hidden" name="name" value="${animal.name}"><input type="submit" value="Adoptar"></form>`;
        str += "</p>";
    });
    str += "<hr><p><a href='/dejar-animal'>DEJAR ANIMAL</a></p>";
    res.send(str);
});

app.get('/sumar-animal', function (req, res) {
    let new_animal = { name: req.query.name, age: +(req.query.age), type: req.query.type };
    data.animals.push(new_animal);
    res.redirect("/");
});

app.get('/dejar-animal', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dejar-animal.html'));
});

app.get('/adoptar', function (req, res) {
    let index = data.animals.findIndex(animal => animal.name === req.query.name);
    if (index !== -1) data.animals.splice(index, 1);
    res.redirect("/");
});
