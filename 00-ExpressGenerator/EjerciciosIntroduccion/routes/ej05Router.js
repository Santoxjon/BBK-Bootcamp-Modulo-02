var express = require('express');
var router = express.Router();
let data = require('../public/javascripts/staticdata');

router.get('/', function (req, res, next) {
  res.render('ej05', { human: data.human });
});

router.get('/name/:newname', function (req, res, next) {
  data.human.name = req.params.newname;
  res.redirect('/ej05');
});

router.get('/lastname/:newlastname', function (req, res, next) {
  data.human.lastname = req.params.newlastname;
  res.redirect('/ej05');
});

router.get('/age/:newage', function (req, res, next) {
  data.human.age = req.params.newage;
  res.redirect('/ej05');
});
module.exports = router;
