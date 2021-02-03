var express = require('express');
var router = express.Router();
let data = require('../public/javascripts/staticdata');
let functions = require('../public/javascripts/functions');

router.get('/', function (req, res, next) {
  res.render('ej07', { zeros: data.zeros });
});

router.get('/add', function (req, res, next) {
  data.zeros[functions.getRandomPos()]++;
  res.redirect('/ej07');
});

module.exports = router;
