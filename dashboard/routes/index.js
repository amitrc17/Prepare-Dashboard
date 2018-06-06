var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let options = {
    host: 'localhost',
    port: 5000,
    path: '/get_patient_list',
    methdod: 'GET'
  };
  http.get(options, (resp) => {
    resp.setEncoding('utf8');
      let body = '';
      resp.on('data', (d) => {
        body += d;
      });

    let d = []
    resp.on('end', () => {
      body = JSON.parse(body);
      for (i=0;i<body.length; i++) {
        d.push(body[i]['p_id']);
      }
      res.render('index', { title: 'Express' , content: d});
    });
   }).on('error', (error) => {
     res.render('error', {message: 'There was a problem in connecting to the backend', 
      error: {status: 500, stack: error.stack}    
      });
   });
});

module.exports = router;
