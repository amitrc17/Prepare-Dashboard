var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('remove_med', { title: 'Remove Patient', 
    m_id: req.query['m_id'], 
    p_id: req.query['p_id'], 
    m_name: req.query['m_name'],
    auth_user: req.query['user']
    });
});

router.post('/rem', function(req, res, next) {
  console.log(req.body);
  fetch('http://localhost:5000/remove_medicine?user=' + req.query['user'], {
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