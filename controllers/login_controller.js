var express = require("express");
var router = express.Router();
var db = require("../models");
// Import the model (.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render('login',{loginPage:true});
});

router.get("/login", function (req, res) {
    res.render('login',{loginPage:true});
});

router.get("/parent-login", function (req, res) {
    res.render('login',{parentLoginPage:true});
});

router.get("/child-login", function (req, res) {
    res.render('login',{childLoginPage:true});
});

router.get("/login-parent", function (req, res) {
    res.render('login');
});

// Export routes for server.js to use.
module.exports = router;
