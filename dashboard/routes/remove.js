var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('remove', { title: 'Remove Patient'});
});

module.exports = router;