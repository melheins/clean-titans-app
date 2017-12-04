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
  $(document).on("click", "#parent_log_in", parentLogin);
  $(document).on("click", "#child_log_in", childLogin);

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
   firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch(function (error, user) {
       // Handle Errors
       var errorCode = error.code;
       var errorMessage = error.message;
       if (errorCode === 'auth/email-already-in-use' || errorCode === 'auth/invalid-email') {
           $('#email').after('<p>' + errorMessage + '<p>');
       } else if (errorCode){
           console.log(errorCode)
       } else uid = user.uid
     }
 }

 //function for parent login
 function parentLogin() {
   event.preventDefault();
   var userDiv  = $('#parent_email')
   var passDiv = $('#parent_password')
   var email = userDiv.val().trim();
   var password = passDiv.val().trim()
   if (!email || !password) return
   firebaseLogIn(email, password, userDiv, passDiv)
  }
 }

 //function for child login
 function childLogin() {
   event.preventDefault();
   var userDiv  = $('#child_user_name')
   var passDiv = $('#child_password')
   var userName = userDiv.val().trim();
   var email = user + "@cleantitans.com";
   var password = passDiv.val().trim()
   if (!email || !password) return
   firebaseLogIn(email, password, userDiv, passDiv)
  }
 }
 
 //function for firebase login
 firebaseLogIn = function (email, password, userDiv, passDiv) {
   firebase.auth().signInWithEmailAndPassword(email, password)
   .catch(function (error, user) {
     //Handle Errors
      if(error) {
        errorCode = error.code;
        errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          passDiv.after('<p>' + errorMessage + '</p>');
        } else if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
          alert(errorMessage);
          userDiv.after('<p>' + errorMessage + '</p>');
        } else {
          console.log(errorCode)
        }
      }
      //successfull login
    } else uid = user.uid
 }

})
