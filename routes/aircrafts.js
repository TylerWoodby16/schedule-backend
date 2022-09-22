var express = require("express");
const { rawListeners } = require("../app");
var router = express.Router();

let aircraft1 = {
  name: "cessna",
  id: 1,
  registration: true,
};

let aircraft2 = {
  name: "piper",
  id: 2,
  registration: false,
};

let aircraft3 = {
  name: "warrior",
  id: 3,
  registration: true,
};

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
router.get("/", function (req, res, next) {
  res.send(["plane1", "plane2", "plane3"]);
});

// GET /aircrafts/objects
router.get("/objects", function (req, res, next) {
  res.send(aircrafts);
});

// POST /aircrafts/test
router.post("/test", function (req, res, next) {
  const id = req.body.id;
  if (id > 7) {
    res.send("greater than 7");
  } else {
    res.send("less than 7");
  }

  // We only ever want to send one response.
});

// POST /aircrafts
router.post("/", function (req, res, next) {
  const aircraftRequest = req.body;
  aircrafts.push(aircraftRequest);
  res.send(aircrafts);

  // We only ever want to send one response.
});

// PUT /aircrafts -> update an aircraft in the aircrafts array
router.put("/:id", function (req, res, next) {
  // step 1: get the aircraft from the req body
  // 2: get the aircraft from the aircrafts array that has same ID.
  // 3: modify the aircraft from aircrafts array with the corresponding data from the aircraft in req body.
  // 4: respond with the modified aircraft

  let requestBodyId = req.body.id;
  let urlId = req.params.id;

  if (requestBodyId != urlId) {
    res.send("no");
    return;
  }
  let aircraftBody = req.body;

  var foundIndex = false;
  for (var i = 0; i < aircrafts.length; i++) {
    // console.log(xs[i]);
    if (aircrafts[i].id == requestBodyId) {
      aircrafts[i] = aircraftBody;
      foundIndex = true;
    }
  }

  if (foundIndex) {
    res.send(aircrafts);
  } else {
    res.status(404).send("suckit");
  }

  //console.log(id);
  // let newId = (aircraft3 = {
  //   id: 5,
  // });

  // aircrafts.findById(id).then(res.send(aircrafts.splice(2, { newId })));
});

router.delete("/:id", function (req, res, next) {
  let id = req.params.id;
  // aircrafts.delete (req.params.id);});

  // req.get(requestBodyId).remove({id: id});
  // var foundIndex = -1;
  // for (var i = 0; i < aircrafts.length; i++) {
  //   if (aircrafts[i].id == id) {
  //     foundIndex = i;
  //   }
  // }

  let filteredAircrafts = aircrafts.filter((aircraft) => {
    return aircraft.id != id;
  });
  
  if (filteredAircrafts.length == aircrafts.length){
    res.status(404).send("not found");
  };

  aircrafts = filteredAircrafts;
  res.send(filteredAircrafts);

  // if (foundIndex != -1) {
  //   aircrafts.splice(foundIndex,1);
  //   res.send(aircrafts);
  // } else {
  //   res.status(404).send("suckit");
  // }
});

module.exports = router;
