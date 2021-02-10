var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  req.app.locals.db.collection("client").find().toArray(function (err, data) {
    if (err != null) {
      console.log(err);
      res.send({ mensaje: "error: " + err });
    } else {
      res.render('clients', { clients: data , title: "Clientes"});
    }
  });
});

module.exports = router;
