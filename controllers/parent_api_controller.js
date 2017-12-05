var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/api/parents", function (req, res) {
  db.Parents.findOne({
    where: {
      uid: req.params.uid
    },
    include: [db.children]
  }).then(function (dbParent) {
    return dbParent
  })
});
