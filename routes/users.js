var express = require('express');
var router = express.Router();

// GET /users

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST /users

router.post('/', function(req, res, next) {
  res.send('THIS IS A POST REQUEST');
});

module.exports = router;
