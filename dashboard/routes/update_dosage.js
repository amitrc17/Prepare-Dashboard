var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('update_dosage', { title: 'Update Dosage Info', 
    m_id : req.query['m_id'], 
    m_name : req.query['m_name'],
    p_id : req.query['p_id'],
    auth_user: req.query['user']
  });
});

module.exports = router;