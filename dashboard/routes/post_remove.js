var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  fetch('http://localhost:5000/remove_user', {
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