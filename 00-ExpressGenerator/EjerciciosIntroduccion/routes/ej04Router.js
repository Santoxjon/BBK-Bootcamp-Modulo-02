var express = require('express');
var router = express.Router();
let functions = require('../public/javascripts/functions');

router.get('/', function (req, res, next) {
  res.render('ej04', { text: functions.sayHi('Jon') });
});

module.exports = router;
