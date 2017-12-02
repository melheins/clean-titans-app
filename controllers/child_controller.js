var express = require("express");

var router = express.Router();

// Import the model (.js) to use its database functions.
//var burger = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.

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

// mission_title
//     mission_point_value
//     mission_decription

router.get("/missions", function (req, res) {

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

    res.render('missions', {layout: 'child_layout', missions_assigned: missions_assigned, mission_name: mission_name, mission_pt_val: mission_pt_val, mission_desc: mission_desc});
});

// Export routes for server.js to use.
module.exports = router;
