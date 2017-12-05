var express = require("express");
var router = express.Router();

// Import the model (.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

router.get("/parent/:id", function (req, res) {
  var id = req.params.id
  console.log(id)
  db.parents.findOne({
    where: {
      id
    },
    include: [db.children, db.active_rewards, db.active_missions]
  }).then(function (parentData) {

    var children = parentData.children;
    var rewards = parentData.active_rewards;
    var missions = parentData.active_missions;
    var rewardsAppr = [];
    var missionsAppr = [];

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
    res.render('parent', {layout: 'parent_layout',parentSummaryPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards, pid: id});
  })
});


router.get("/parent-team/:id", function (req, res) {
    var id = req.params.id;
    db.parents.findOne({
      where: {
        id
      },
      include: [db.children, db.active_missions, db.active_rewards]
    }).then(function (parentData) {

          var children = parentData.children;
          var rewards = parentData.active_rewards;
          var missions = parentData.active_missions;
          var rewardsAppr = [];
          var missionsAppr = [];
          var name = parentData.children.first_name;

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

      res.render('parent', {layout: 'parent_layout', parentFamilyPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, pid:id, name: name});
    })

});

router.get("/parent-add-child/:id", function (req, res) {
    var id = req.params.id
    console.log(id)
    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewards = parentData.active_rewards;
        var missions = parentData.active_missions;
        var rewardsAppr = [];
        var missionsAppr = [];

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
        res.render('parent', {layout: 'parent_layout',parentAddChildPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards, pid: id});
    });
});

router.get("/parent-rewards/:id", function (req, res) {
    var id = req.params.id
    console.log(id)
    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewards = parentData.active_rewards;
        var missions = parentData.active_missions;
        var rewardsAppr = [];
        var missionsAppr = [];

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
        res.render('parent', {layout: 'parent_layout',parentRewardsPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards, pid: id});
    });
});

router.get("/parent-missions/:id", function (req, res) {
    var id = req.params.id
    console.log(id)
    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewards = parentData.active_rewards;
        var missions = parentData.active_missions;
        var rewardsAppr = [];
        var missionsAppr = [];

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
        res.render('parent', {layout: 'parent_layout',parentMissionsPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards, pid: id});
    });
});

router.get("/parent-edit-child/:id", function (req, res) {
    var id = req.params.id
    console.log(id)
    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewards = parentData.active_rewards;
        var missions = parentData.active_missions;
        var rewardsAppr = [];
        var missionsAppr = [];

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
        res.render('parent', {layout: 'parent_layout',parentEditChildPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards, pid: id});
    });

});

router.get("/parent/redirect/:id", function (req, res) {
    res.redirect("/parent/" + req.params.id)
});


// Export routes for server.js to use.
module.exports = router;
