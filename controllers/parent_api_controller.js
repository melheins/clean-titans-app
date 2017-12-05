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
    var children = parentData.children;
    var rewards = parentData.active_rewards;
    var missions = parentData.active_missions;
    var rewardsAppr = [];
    var missionsAppr = [];
    var newParams = []

    //if no missions, set to false
    if (missionsAppr.length === 0) missionsAppr = false;
    else {
      //check for missions that need approval
      for (var i = 0; i < missions.length; i++) {
        if (missions[i].mission_status === "W") missionsAppr.push(missions[i])
      };
    }

    if (rewardsAppr.length === 0) rewardsAppr = false;
    else {
      for (var j = 0; j < missions.length; j++) {
        if (rewards[j].reward_status === "W") rewardsAppr.push(rewards[j])
      };
    }
    res.json(parentData)
  })
});
router.get("/api/parents/get/:uid", function (req, res) {
  db.parents.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (id) {
    res.json(parentId.id)
  })
})


router.post("/api/parents", function (req, res) {
  db.parents.create(req.body)
  .then(function (newParent) {
    res.json(newParent)
  })
});

module.exports = router;
