var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('ej04');
});

module.exports = router;
