var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/api/parents/:id", function (req, res) {
  db.parents.findOne({
    where: {
      id: req.params.id
    },
    include: [db.children, db.active_rewards, db.active_missions]
  }).then(function (parentData) {
    res.json(parentData)
  })
});
router.post("/api/parents", function (req, res) {
  db.parents.create(req.body)
  .then(function (newParent) {
    res.json(newParent)
  })
});

module.exports = router;
