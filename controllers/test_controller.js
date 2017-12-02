var express = require("express");

var router = express.Router();

// Import the model (.js) to use its database functions.
//var burger = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render('login');
});

router.get("/login-parent", function (req, res) {
    res.render('login');
});

router.get("/parent", function (req, res) {

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

    var rewards = [
        {
            "title": "Cookie",
            "points": "5"
        },
        {
            "title": "Ice Cream",
            "points": "5"
        }];

    var missions = [
        {
            "title": "Brush Teeth",
            "points": "5"
        },
        {
            "title": "Make Bed",
            "points": "5"
        }];

    var rewardsAppr;

    var missionsAppr;

    res.render('parent', {layout: 'parent_layout',parentSummaryPage:true, child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards});
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

router.get("/child", function (req, res) {

    var missions_assigned = [
        {
            "mission_title": "sample1"
        },
        {
            "mission_title": "sample2"
        }];

    console.log(missions_assigned);

    var rewards_earned = [
        {
            "reward_id": "sample1"
        },
        {
            "reward_id": "sample2"
        }];

    var hero = {
        "nickname": "Sylar"
    };

    console.log(rewards_earned);

    res.render('child', {layout: 'child_layout', childSummaryPage:true, missions_assigned: missions_assigned, rewards_earned: rewards_earned, child: hero});
});

// mission_title
//     mission_point_value
//     mission_decription

router.get("/child-missions", function (req, res) {

    var hero = {
        "nickname": "Sylar"
    };

    var missions_assigned = [
        {
            "mission_id": "sample1"
        },
        {
            "mission_id": "sample2"
        }];

    var mission_name = {
        "mission_title": "sweep the floor"
    };

    var mission_pt_val = {
        "mission_point_value": 9
    };

    var mission_desc = {

        "mission_description": "Sweep with the broom by making short motions across the floor. Try to be careful not to fling dust everywhere by keeping each sweep short. Sweep all dust" +
        "and such to one location. sweep everything into the dustpan, then dump the dustpan contents into the trashcan, and put the broom and dustpan away."
    };

    res.render('child', {layout: 'child_layout',childMissionsPage:true, missions_assigned: missions_assigned, mission_name: mission_name, mission_pt_val: mission_pt_val, mission_desc: mission_desc, child: hero});
});

router.get("/child-rewards", function (req, res) {

    var rewards_available = {

        "reward_id": "ice cream",
        "reward_points_required": 3
    };

    var hero = {
        "nickname": "Sylar"
    };

    res.render('child', {layout: 'child-layout', childRewardsPage:true, rewards_available:rewards_available, child: hero});
});



// Export routes for server.js to use.
module.exports = router;
