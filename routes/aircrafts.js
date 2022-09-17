var express = require('express');
var router = express.Router();

let aircraft1 = {
  "name": "cessna",
  "id": 1,
  "registration": true,
}

let aircraft2 = {
  "name": "piper",
  "id": 2,
  "registration": false,
}

let aircraft3 = {
  "name": "warrior",
  "id": 3,
  "registration": true,
}

let aircrafts = [aircraft1, aircraft2, aircraft3];

// Alternate technique:
// let aircrafts = [
//   {
//   "name": "cessna",
//   "id": 1,
//   "registration": true,
//   },
//   {
//     "name": "piper",
//     "id": 2,
//     "registration": false,
//   }
// ]

// GET /aircrafts
router.get('/', function(req, res, next) {
  res.send(['plane1', 'plane2', 'plane3']);
});

// GET /aircrafts/objects
router.get('/objects', function(req, res, next) {
  res.send(aircrafts);
});

// POST /aircrafts/test
router.post('/test', function(req, res, next) {
  const id = req.body.id;
  if(id > 7) {
    res.send('greater than 7');
  } else {
    res.send('less than 7');
  }

  // We only ever want to send one response.
});

// POST /aircrafts
router.post('/', function(req, res, next) {
  const aircraftRequest = req.body;
  aircrafts.push(aircraftRequest);
  res.send(aircrafts);

  // We only ever want to send one response.
});

// PUT /aircrafts -> update an aircraft in the aircrafts array
router.put('/', function(req, res, next) {
  // step 1: get the aircraft from the req body
  // 2: get the aircraft from the aircrafts array that has same ID.
  // 3: modify the aircraft from aircrafts array with the corresponding data from the aircraft in req body.
  // 4: respond with the modified aircraft
});

module.exports = router;
