var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
    data: {
      title: "The Shawshank Redemption",
      type: 'drama',
    }
  }]);
});

module.exports = router;
