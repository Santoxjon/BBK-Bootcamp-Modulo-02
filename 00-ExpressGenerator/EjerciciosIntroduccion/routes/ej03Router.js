var express = require('express');
var router = express.Router();
let data = require("../public/javascripts/staticdata");


router.get(['/persona', '/'], function (req, res, next) {
  res.render('ej03', { people: data.people });
});

router.get('/persona/:persona', function (req, res, next) {
  res.render('ej03', { person: req.params.persona });
});

module.exports = router;
