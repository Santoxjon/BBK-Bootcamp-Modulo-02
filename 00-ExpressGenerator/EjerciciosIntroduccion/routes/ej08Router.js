var express = require('express');
var router = express.Router();
let data = require('../public/javascripts/staticdata');
let functions = require('../public/javascripts/functions');

router.get('/', function (req, res, next) {
  res.render('ej08', { zeros: data.zeros });
});

router.get('/add', function (req, res, next) {
  data.zeros[functions.getRandomPos()]++;
  res.redirect('/ej08');
});

router.get('/reset/:pos', function (req, res, next) {
  if (+req.params.pos < 10 && +req.params.pos > -1) data.zeros[req.params.pos] = 0;
  res.redirect('/ej08');
});

module.exports = router;
