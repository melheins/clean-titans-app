//Dependencies
const path = require('path');

//Basic html pages
module.exports = function (app) {
  //Login Page
  app.get("/", function (req, res) {
      res.render('login');
  });
  //Parent View
  app.get("/parent", function (req, res) {
      res.render('parent', {layout: 'parent_layout'});
  });
  //Child View
  app.get("/child", function (req, res) {
      res.render('child', {layout: 'child_layout'});
  });
};
