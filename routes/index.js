var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Welcome Raj!' });
  // res.send('Welcome to review world');
});

module.exports = router;
