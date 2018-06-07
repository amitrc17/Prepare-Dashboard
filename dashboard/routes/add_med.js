var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('add_med', { title: 'Remove Patient', p_id: req.query['p_id'], auth_user: req.query['user']});
});

router.post('/add', function(req, res, next) {
  fetch('http://localhost:5000/add_medicine?user=' + req.query['user'], {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then( (resp) => {
    console.log(resp.status);
    res.sendStatus(resp.status);
  });
});

module.exports = router;