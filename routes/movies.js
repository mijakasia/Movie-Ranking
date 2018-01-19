var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	title: "movie 1"
  }, {
  	id: 2,
  	title: "movie 2"
  }]);
});

module.exports = router;
