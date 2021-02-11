var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
let functions = require('../public/javascripts/functions');
let ObjectId = require('mongodb').ObjectId;

// Vista de todos los clientes
router.get('/', function (req, res) {
  req.app.locals.db.collection("client").find().toArray(function (err, data) {
    if (err != null) {
      console.log(err);
      res.send({ mensaje: "error: " + err });
    } else {
      res.render('clients', { clients: data, title: "Clientes" });
    }
  });
});

// Registrar nuevos clientes
router.get('/register', function (req, res) {
  res.render('register-client', { title: 'Registrar cliente' });
});

router.post('/register', function (req, res) {
  let dni = req.body.dni + functions.dniL(req.body.dni);
  let name = req.body.name;
  let lastname = req.body.lastname;

  req.app.locals.db.collection("client").insertOne({ dni, name, lastname });

  res.redirect("/clients");
});

module.exports = router;

// Editar clientes existentes
router.get('/:id/edit', function (req, res) {
  let id = new ObjectId(req.params.id);
  req.app.locals.db.collection("client").findOne({ "_id": id }, function (err, data) {
    if (err != null) {
      console.log(err);
      res.send({ mensaje: "error: " + err });
    } else {
      res.render('edit-client', { client: data, title: "Clientes" });
    }
  });
});

router.put('/:id', function (req, res) {
  let id = new ObjectId(req.params.id);
  let data = req.body;
  req.app.locals.db.collection("client").updateOne({ "_id": id }, { $set: { name: data.name, lastname: data.lastname } });
  res.send(['Exito']);
});