$(document).ready(function() {
  //Initialize firebase
  var config = {
     apiKey: "AIzaSyD8Hq5odw3zTQB2ECUmn5PQ9JInzUJtxlE",
     authDomain: "clean-titans.firebaseapp.com",
     databaseURL: "https://clean-titans.firebaseio.com",
     projectId: "clean-titans",
     storageBucket: "clean-titans.appspot.com",
     messagingSenderId: "184154882931"
   };
   firebase.initializeApp(config);
   var uid
   firebase.auth().onAuthStateChanged(function (user) {
     if (user) uid = user.uid
   })

   //Set up listeners
  $(document).on("click", "#create-account", createParent);
  $(document).on("click", )
  //function to add new u=parent to db and firebase
  function createParent() {
    event.preventDefault();
    //get values
    var email = $("#create-email").val();
    var password = $("#create-password").val();
    var first_name = $("#create_first_name").val();
    var last_name = $("#create_last_name").val();
    //validate form \
    if (!email || !password || !first_name || !last_name) return
    //create firebase account
    addUser(email, password)
    .then(addParent({first_name, last_name, uid};
  }
  //function for creting parent
 function addParent(parentData) {
   $.post("/api/parents", parentData)
 }
 //add user to firebase
 function addUser(email, password) {
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error, user) {
       // Handle Errors
       var errorCode = error.code;
       var errorMessage = error.message;
       if (errorCode === 'auth/email-already-in-use' || errorCode === 'auth/invalid-email') {
           $('#email').after('<p>' + errorMessage + '<p>');
       } else if (errorCode){
           console.log(errorCode)
       } else uid = user.uid
 }

})
