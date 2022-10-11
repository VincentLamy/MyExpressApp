var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ma super application Express', header: 'Lab 04' });
});

module.exports = router;
