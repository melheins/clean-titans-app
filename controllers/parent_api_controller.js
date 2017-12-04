var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/api/parents/:uid", function (req, res) {
  db.parents.findOne({
    where: {
      uid: req.params.uid
    },
    include: [db.children]
  }).then(function (parentData) {
    res.json(parentData)
  })
});

router.post("/api/parents", function (req, res) {
  db.parents.create(req.body)
  .then(function (parentData) {
    res.json(parentData)
  })
});

module.exports = router;
