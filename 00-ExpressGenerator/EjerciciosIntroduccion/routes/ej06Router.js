var express = require('express');
var router = express.Router();
let data = require('../public/javascripts/staticdata');

router.get('/', function (req, res, next) {
  res.render('ej06', { campers: data.campers });
});

router.get('/:newcamper', function (req, res, next) {
  data.campers.unshift(req.params.newcamper);
  res.redirect('/ej06');
});

module.exports = router;
