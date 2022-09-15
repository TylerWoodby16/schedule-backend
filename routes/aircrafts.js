var express = require('express');
var router = express.Router();

// GET /aircrafts
router.get('/', function(req, res, next) {
  res.send(['plane1', 'plane2', 'plane3']);
});

// GET /aircrafts/objects
router.get('/objects', function(req, res, next) {
  const aircraft = {
    "name":"cessna",
    "id":1
  };
  res.send([aircraft, aircraft, aircraft]);
});

// POST /aircrafts
router.post('/', function(req, res, next) {
  const id = req.body.id;
  if(id > 7) {
    res.send('greater than 7');
  } else {
    res.send('less than 7');
  }

  // We only ever want to send one response.
});

module.exports = router;
