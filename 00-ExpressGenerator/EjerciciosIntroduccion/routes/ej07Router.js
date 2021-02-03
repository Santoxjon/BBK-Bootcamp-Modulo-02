var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('ej07');
});

module.exports = router;
