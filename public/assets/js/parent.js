$(document).ready(function () {
  //Initialize firebase if not initialized
  var config = {
     apiKey: "AIzaSyD8Hq5odw3zTQB2ECUmn5PQ9JInzUJtxlE",
     authDomain: "clean-titans.firebaseapp.com",
     databaseURL: "https://clean-titans.firebaseio.com",
     projectId: "clean-titans",
     storageBucket: "clean-titans.appspot.com",
     messagingSenderId: "184154882931"
   };
   //check for running instance
   if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  // Watch for chnges to logged in user and get uid
  var uid;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) uid = user.uid
  })
  //set up listeners
  $(document).on("click", div, action)
  $(document).on("click", div, action)
})
