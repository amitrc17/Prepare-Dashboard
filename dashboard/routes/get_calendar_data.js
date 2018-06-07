var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.get('Patient-Id'));
  fetch('http://localhost:5000/get_medicine_data?user=' + req.query['user'], {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Patient-Id' : req.get('Patient-Id')
    },
    mode: 'cors'
  }).then( (resp) => {
    return resp.json();
  }).then((resp) => {
    res.send(resp);
  });
});

module.exports = router;