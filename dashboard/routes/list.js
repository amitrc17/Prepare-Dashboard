var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let options = {
    host: 'localhost',
    port: 5000,
    path: '/get_patient_list?user=' + req.query['user'],
    methdod: 'GET'
  };
  http.get(options, (resp) => {
    if(resp.statusCode == 401) {
      res.render('error', {message: 'Unauthorized Access Request!',
        error: {status: 401}});
    } else {
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
        res.render('list', { title: 'Express' , content: d, auth_user: req.query['user']});
      });
    }
   }).on('error', (error) => {
     res.render('error', {message: 'There was a problem in connecting to the backend', 
      error: {status: 500, stack: error.stack}    
      });
   });
});

module.exports = router;
