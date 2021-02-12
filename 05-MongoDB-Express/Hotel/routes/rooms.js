var express = require('express');
var router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
let ObjectId = require('mongodb').ObjectId;

// Mostrar habitaciones y clientes que pueden reservar
router.get('/', function (req, res, next) {
  let rooms, clients;
  req.app.locals.db.collection("room").find().toArray(function (err, data) {
    if (err != null) {
      console.log(err);
      res.send({ mensaje: "error: " + err });
    } else {
      rooms = data;

      req.app.locals.db.collection("client").find().toArray(function (err, data) {
        if (err != null) {
          console.log(err);
          res.send({ mensaje: "error: " + err });
        } else {
          clients = data;
          res.render('rooms', { title: 'Habitaciones', rooms: rooms, clients: clients, index: 0, today: new Date().toISOString().substr(0, 10) });
        }
      });
    }
  });
});

// Realizar reserva
router.post('/book', (req, res) => {
  let room_id = new ObjectId(req.body.room);
  let client_id = new ObjectId(req.body.client);
  let checkin_date = req.body.checkin_date;
  console.log("HABITACIÓN QUE SE OCUPARÁ -> " + room_id);

  req.app.locals.db.collection("room").updateOne({ "_id": room_id }, { $set: { "condition": true } }, function (err) {
    if (err != null) {
      console.log(err);
      res.send({ mensaje: "error: " + err });
    } else {
      req.app.locals.db.collection("booking").insertOne({ room_id, client_id, checkin_date, checkout_date: "" }, function (err) {
        if (err != null) {
          console.log(err);
          res.send({ mensaje: "error: " + err });
        } else {
          res.redirect('/rooms');
        }
      });
    }
  });
});

router.put('/book', (req, res) => {
  let room_id = new ObjectId(req.body.room_id);
  let checkout_date = req.body.checkout_date;
  console.log(room_id);

  req.app.locals.db.collection("room").updateOne({ "_id": room_id }, { $set: { "condition": false } }, function (err) {
    if (err != null) {
      console.log(err);
      res.send({ mensaje: "error: " + err });
    } else {
      req.app.locals.db.collection("booking").updateOne({ room_id, checkout_date: "" }, { $set: { checkout_date } }, function (err) {
        if (err != null) {
          console.log(err);
          res.send({ mensaje: "error: " + err });
        } else {
          res.json('Exito');
        }
      });
    }
  });
});

module.exports = router;
