var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/browser-refresh', function(req, res, next) {
	if (process.env.NODE_ENV === 'dev') return res.redirect(process.env.BROWSER_REFRESH_URL)
	return res.status(200).end();
})

module.exports = router;
