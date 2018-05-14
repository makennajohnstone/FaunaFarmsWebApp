var express = require('express');
var router = express.Router();

//establish database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password123',
  database : 'faunafarms'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Load meats for the meats page. */
router.get('/meats', function(req, res, next) {
  connection.query("SELECT * FROM Cuts", function(err, result, fields) {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(JSON.stringify(result)));
    //console.log(result);
    // Object.keys(result).forEach(function(key) {
    //   var row = result[key];
    //   //console.log(row);
    //   console.log(row.name);
  });
});

  // res.json([{
  //   name: "chicken thigh",
  //   price: 20
  // }, {
  //   name: "chicken breast",
  //   price: 30
  // }, {
  //   name: "drumsticks",
  //   price: 40
  // }, {
  //   name: "chicken little",
  //   price: 50
  // }, {
  //   name: "chicken little",
  //   price: 50
  // },
  // {
  //   name: "chicken little",
  //   price: 50
  // },
  // {
  //   name: "chicken little",
  //   price: 50
  // },
  // {
  //   name: "chicken little",
  //   price: 50
  // },
  // {
  //   name: "chicken little",
  //   price: 50
  // }]);

module.exports = router;
