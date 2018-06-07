var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('remove', { title: 'Remove Patient', auth_user: req.query['user']});
});

module.exports = router;