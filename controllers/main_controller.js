var express = require("express");

var router = express.Router();

// Import the model (.js) to use its database functions.
//var burger = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render('login');
});

router.get("/parent", function (req, res) {
    res.render('parent', {layout: 'parent_layout'});
});

router.get("/child", function (req, res) {
    res.render('child', {layout: 'child_layout'});
});

// Export routes for server.js to use.
module.exports = router;
