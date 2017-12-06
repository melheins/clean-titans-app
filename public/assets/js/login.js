

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
   if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
   var uid
   firebase.auth().onAuthStateChanged(function (user) {
     if (user) uid = user.uid
   })

   //Set up listeners
  $(document).on("click", "#create_account", createParent);
  $(document).on("click", "#parent_log_in", parentLogin);
  $(document).on("click", "#child_log_in", childLogin);

  //function to add new u=parent to db and firebase
  function createParent() {
    event.preventDefault();
    //get values
    var email = $("#create_email").val().trim();
    var password = $("#create_password").val().trim();
    var verify = $("#password_verify").val().trim();
    var first_name = $("#create_first_name").val().trim();
    var last_name = $("#create_last_name").val().trim();
    //validate form \
    if (!email || !password || !first_name || !last_name || password != verify) {
      console.log(email + " " + password + " " + verify + " " + first_name + " " + last_name);
      return}
    console.log("clicked");

    //create firebase account
    addUser(email, password, last_name, first_name);

  }


 //add user to firebase
 function addUser(email, password, first_name, last_name) {
   firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch(function (error) {
       console.log(error)
       console.log(user);
       // Handle Errors
       var errorCode = error.code;
       var errorMessage = error.message;

       if (errorCode === 'auth/email-already-in-use' || errorCode === 'auth/invalid-email') {
           $('#email').after('<p>' + errorMessage + '<p>');
           return
       } else {
           console.log(errorCode)
           return
       }
   }).then(function (user) {
     uid = user.uid;
     addParent({first_name, last_name, uid})
   })

 }
 //function for creating parent
function addParent(parentData) {
  console.log(parentData)
  $.post("/api/parents", parentData)
  .then(function (newParent) {
    var url = location.host + "/parent/" + newParent.id
    console.log(url);
    location.href = url
  })
}

 //function for parent login
 function parentLogin() {
   event.preventDefault();
   var userDiv  = $('#parent_email')
   var passDiv = $('#parent_password')
   var email = userDiv.val().trim();
   var password = passDiv.val().trim()
   if (!email || !password ) return
   firebaseLogIn(email, password, userDiv, passDiv, "parents");
 }

 //function for child login
 function childLogin() {
   event.preventDefault();
   var userDiv  = $('#child_user_name')
   var passDiv = $('#child_password')
   var userName = userDiv.val().trim();
   var email = userName + "@cleantitans.com";
   var password = passDiv.val().trim()
   if (!email || !password) return
   childLogIn(email, password)
   }

 //function for child login
 childLogIn = function (email, password) {
   firebase.auth().signInWithEmailAndPassword(email, password)
   .catch(function (error, user) {
     //Handle Errors
      if(error) {
        errorCode = error.code;
        errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          $('#child_password').after('<p>' + errorMessage + '</p>');
        } else if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
          alert(errorMessage);
          $('#child_user_name').after('<p>' + "Not Found" + '</p>');
        } else {
          console.log(errorCode)
        }
      //successfull login
      } else {
        uid = user.uid;
        console.log(user);
        console.log(uid);
      }

    }) .then(function () {
        console.log(uid)
         var url = "/api/children/get/" + uid
         console.log(url)
         $.get(url)
         .then(function (child) {
           window.location = "/child";
         })
       });
  }
  //function for parent login
  firebaseLogIn = function (email, password) {
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
       //successfull login
       } else {
         uid = user.uid;
         console.log(user);
         console.log(uid);
       }

     }) .then(function (uid, path) {
          var url = path + uid
          console.log(url)
          $.get(url)
          .then(function (response) {
            console.log(response);
          })

        });
   }

})
