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
    console.error('error connecting to database: ' + err.stack);
    return;
  }
  console.log('database connected as id ' + connection.threadId);
});

/* Load meats for the meats page. */
router.get('/meats', function(req, res, next) {
  connection.query("SELECT * FROM Cuts", function(err, result, fields) {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(JSON.stringify(result)));
  });
});

module.exports = router;
