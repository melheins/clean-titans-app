var express = require("express");

var router = express.Router();

// Import the model (.js) to use its database functions.
//var burger = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
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

    res.render('parent', {layout: 'parent_layout', child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr, mission:missions, reward:rewards});
});

router.get("/child", function (req, res) {

    var missions_assigned = [
        {
            "mission_id": "sample1"
        },
        {
            "mission_id": "sample2"
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

    res.render('child', {layout: 'child_layout', missions_assigned: missions_assigned, rewards_earned: rewards_earned, child: hero});
});

// Export routes for server.js to use.
module.exports = router;
