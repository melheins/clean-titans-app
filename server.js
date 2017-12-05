// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Static directory
app.use(express.static("public"));


// Handlebars
// =============================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "login_layout"}));
app.set("view engine", "handlebars");

// Routes
// =============================================================
<<<<<<< HEAD
// var routes = require("./controllers/test_controller.js");
// app.use("/", routes);
=======

>>>>>>> ks

var route1 = require("./controllers/login_controller.js");
var route2 = require("./controllers/parent_controller.js");
var route3 = require("./controllers/child_controller.js");
var route4 = require("./controllers/parent_api_controller.js");

app.use("/", route1);
app.use("/", route2);
app.use("/", route3);
app.use("/", route4);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
