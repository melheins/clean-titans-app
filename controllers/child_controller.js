var express = require("express");
var db = require("../models");
var router = express.Router();

// Import the model (.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.

router.get("/child/:id", function (req, res) {
    /*console.log(req.params.id)
    var missions_assigned = [
        {
            "mission_title": "sample1"
        },
        {
            "mission_title": "sample2"
        }];

    var rewards_earned = [
        {
            "reward_id": "sample1"
        },
        {
            "reward_id": "sample2"
        }];

    var hero = {
        "nickname": "sylar"
    };*/

    return res.render('child', {
        layout: 'child_layout',
        childSummaryPage: true,
        missions_assigned: [], //
        rewards_earned: [], //rewards_earned,
        child: {nickname: "syler"}
    });
});


router.get("/child-missions", function (req, res) {

    var hero = {
        "nickname": "sylar"
    };

    var missions_assigned = [
        {
            "mission_id": "sample1",
            "mission_title": "sweep the floor",
            "mission_point_value": 5,
            "mission_description": "Sweep with the broom by making short motions across the floor. Try to be careful not to fling dust everywhere by keeping each sweep short. Sweep all dust" +
            "and such to one location. sweep everything into the dustpan, then dump the dustpan contents into the trashcan, and put the broom and dustpan away."
        },
        {
            "mission_id": "sample2",
            "mission_title": "unload the dishwasher",
            "mission_point_value": 7,
            "mission_description": "Take all dishes out of the washer, and put them where they go in the kitchen." +
            "Double check to be sure they are clean!"
        }];

    res.render('child', {
        layout: 'child_layout',
        childMissionsPage: true,
        missions_assigned: missions_assigned,
        child: hero
    });
});

router.get("/child-rewards", function (req, res) {

    var rewards_available = [
        {

        "reward_id": "ice cream",
        "reward_points_required": 3
    }];

        console.log(rewards_available);

    var hero = {
        "nickname": "Sylar"
    };

    res.render('child', {
        layout: 'child_layout',
        childRewardsPage: true,
        rewards: rewards_available,
        child: hero
    });
});

router.get('/child-comics', function (req, res) {

    var hero = {
        "nickname": "Sylar"
    };

    var comics_earned = {
        "comic_id": "Batman"
    };

    res.render('child', {layout: 'child_layout', childsComicsPage: true, child: hero, comics: comics_earned});
});


// Export routes for server.js to use.
module.exports = router;
