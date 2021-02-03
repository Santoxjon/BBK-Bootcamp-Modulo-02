var express = require('express');
// const { workshop } = require('../public/javascripts/staticdata');
var router = express.Router();
let data = require('../public/javascripts/staticdata');
let functions = require('../public/javascripts/functions');

router.get('/', function (req, res, next) {
  res.render('ejEXTRA01', { workshop: data.workshop });
});

router.get('/Pescaderia', function (req, res, next) {
  res.render('ejEXTRA01_dep', { dep: data.workshop[0] });
});
router.get('/Pescaderia/:name/:quant', function (req, res, next) {
  functions.addToCart(data.workshop[0], req, res, data.cart);
});

router.get('/Carniceria', function (req, res, next) {
  res.render('ejEXTRA01_dep', { dep: data.workshop[1] });
});
router.get('/Carniceria/:name/:quant', function (req, res, next) {
  functions.addToCart(data.workshop[1], req, res, data.cart);
});

router.get('/Fruteria', function (req, res, next) {
  res.render('ejEXTRA01_dep', { dep: data.workshop[2] });
});
router.get('/Fruteria/:name/:quant', function (req, res, next) {
  functions.addToCart(data.workshop[2], req, res, data.cart);
});

// Error 
router.get("/error/:product", function (req, res) {
  res.render('ejEXTRA01_err', { product: req.params.product });
});

// Cesta
router.get("/cesta", function (req, res) {
  res.render('ejEXTRA01_cart', { cart: data.cart });
});

// Finalizar compra
router.get("/pay", function (req, res) {
  data.cart = [];
  functions.reStock(res, data);
});

module.exports = router;