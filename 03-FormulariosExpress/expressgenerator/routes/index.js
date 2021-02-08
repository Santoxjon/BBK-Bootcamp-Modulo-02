var express = require('express');
var router = express.Router();
let data = require("../public/javascripts/static");

//router.use(express.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Animales', animals: data.animals });
});

router.get('/sumar-animal', function (req, res) {
  let new_animal = { name: req.query.name, age: +(req.query.age), type: req.query.type };
  data.animals.push(new_animal);
  res.redirect("/");
});

router.get('/dejar-animal', function (req, res) {
  res.render('dejar-animal');
});

router.get('/edit-animal', (req, res) => {
  res.render('edit-animal', {name: req.query.name, age: req.query.age, type: req.query.type});
 });

router.put('/update-animal', (req, res) => {
  let index = data.animals.findIndex(animal => animal.name === req.body.old_name);
  if (index !== -1){
    data.animals.name = req.body.new_name;
    data.animals.age = req.body.new_age;
    data.animals.type = req.body.new_type;
  }
  res.redirect('/')
});

router.get('/adoptar', function (req, res) {
  let index = data.animals.findIndex(animal => animal.name === req.query.name);
  if (index !== -1) data.animals.splice(index, 1);
  res.redirect("/");
});


module.exports = router;
