var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express', auth_user: req.query['user']});
});

module.exports = router;
