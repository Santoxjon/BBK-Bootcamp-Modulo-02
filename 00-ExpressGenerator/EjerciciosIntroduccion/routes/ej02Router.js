var express = require('express');
var router = express.Router();
let functions = require('../public/javascripts/functions')

router.get('/', function (req, res, next) {
  let limit = ~~(Math.random() * (11) + 10);
  functions.getRandomNumber(limit, res);
});

router.get('/:limit', function (req, res, next) {
  let limit = req.params.limit;
  functions.getRandomNumber(limit, res);
});

module.exports = router;


