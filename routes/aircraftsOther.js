var express = require("express");
const { rawListeners } = require("../app");
var router = express.Router();

// import cessnaPhoto from "./assets/Cessna_172S.jpg";

// let aircrafts = [];
let user = {};

// GET /aircraftsOther
router.get("/", function (req, res, next) {
  res.send(user);
});

router.post("/", function (req, res, next) {
  const aircraftRequest = req.body;
  // aircrafts.push(aircraftRequest);
  // res.send(aircrafts);
  // console.log(aircrafts);
  // user = aircraftRequest;

  user = {
    firstName: aircraftRequest.firstName,
    lastName: aircraftRequest.lastName,
    email: aircraftRequest.email,
  }

  res.send(user);

  // We only ever want to send one response.
});



module.exports = router;
