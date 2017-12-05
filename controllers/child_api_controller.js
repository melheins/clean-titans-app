var express = require("express");
var db = require("../models");
var router = express.Router();

router.post("/api/children", function (req, res) {
  db,children.create(req.body)
    .then(function (newChild) {
      res.json(newChild)
  })
});

router.get("/api/children/missions", function (req, res) {
  db.missions.findAll()
  .then(function (missionList) {
    res.jason(missionList)
  })
})


module.exports = router;
