var express = require("express");
var db = require("../models");
var router = express.Router();


router.get("/api/parents/get/:uid", function (req, res) {
  db.parents.findOne({
    where: {
      uid: req.params.uid
    }
  }).then(function (id) {
    res.json(id.id)
  })
})


router.post("/api/parents", function (req, res) {
  db.parents.create(req.body)
  .then(function (newParent) {
    res.json(newParent)
  })
});

module.exports = router;
