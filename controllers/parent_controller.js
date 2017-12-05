var express = require("express");
var db = require("../models");
var router = express.Router();

// Import the model (.js) to use its database functions.
//var burger = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.

router.get("/parent/:uid", function (req, res) {
  var uid = req.params.uid
  $.get("/api/parents/" + uid)
  .then(function (parentData) {
    var children = [parentData.children];
    var rewards = [parentData.active_rewards];
    var missions = [parentData.active_missions];
    var rewardsAppr = [];
    var missionsAppr = [];
    //check for missions that need approval
    for (var i = 0; i > missions.length; i++) {
      if (missions[i].mission_status === "W") missionsAppr.push(missions[i])
    };
    //if no missions, set to false
    if (missionsAppr.length === 0) missionsAppr = false;

    for (var j = 0; j > missions.length; j++) {
      if (rewards[j].reward_status === "W") rewardsAppr.push(rewards[j])
    };

    if (rewardsAppr.length === 0) rewardsAppr = false;
    res.render('parent', {layout: 'parent_layout',parentSummaryPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards});
  })
});


router.get("/parent-team", function (req, res) {

    var children = [
        {
            "name": "test01",
            "nickname": "Bobbie",
            "avatar": "assets/images/childavatars/batman.jpg"
        },
        {
            "name": "test02",
            "nickname": "Johnny",
            "avatar": "assets/images/childavatars/spiderman.jpg"
        }];

    var rewardsAppr;

    var missionsAppr;

    res.render('parent', {layout: 'parent_layout', parentFamilyPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr});
});

router.get("/parent-add-child", function (req, res) {

    res.render('parent', {layout: 'parent_layout', parentAddChildPage:true});
});

router.get("/parent-rewards", function (req, res) {

    res.render('parent', {layout: 'parent_layout', parentRewardsPage:true});
});

router.get("/parent-missions", function (req, res) {

    res.render('parent', {layout: 'parent_layout', parentMissionsPage:true});
});

router.get("/parent-edit-child", function (req, res) {

    res.render('parent', {layout: 'parent_layout', parentEditChildPage:true});
});



// Export routes for server.js to use.
module.exports = router;
