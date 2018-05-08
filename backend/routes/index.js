var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Load meats for the meats page. */
router.get('/meats', function(req, res, next) {
  res.json([{
    name: "chicken thigh",
    price: 20
  }, {
    name: "chicken breast",
    price: 30
  }, {
    name: "drumsticks",
    price: 40
  }, {
    name: "chicken little",
    price: 50
  }, {
    name: "chicken little",
    price: 50
  },
  {
    name: "chicken little",
    price: 50
  },
  {
    name: "chicken little",
    price: 50
  },
  {
    name: "chicken little",
    price: 50
  },
  {
    name: "chicken little",
    price: 50
  }]);
});

module.exports = router;
