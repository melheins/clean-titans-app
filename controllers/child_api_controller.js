var express = require("express");
var db = require("../models");
var router = express.Router();

router.post("/api/children", function (req, res) {
  db.children.create(req.body)
    .then(function (newChild) {
      res.json(newChild)
  })
});

router.get("/api/children/missions", function (req, res) {
  db.missions.findAll({})
  .then(function (missionList) {
    res.json(missionList)
  })
})

router.get("/api/children/get/:uid", function (req, res) {
  db.children.findOne({
    where: {
      uid: req.params.uid
    },
      include: [db.active_missions, db.active_rewards]

  }).then(function (child) {
    res.json(child)
  })
});

router.post("/api/children/missions", function (req, res) {
  db.active_missions.create(req.body)
    .then(function (mission) {
      res.json(mission)
    })
});

module.exports = router;
