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

$(document).ready(function() {
  $(document).on("click", "#create-account", function () {
    event.preventDefault();

    var email = $("#create-email").val();
    var password = $("#create-password").val();
    console.log($("#create-email"));
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use' || errorCode === 'auth/invalid-email') {
            $('#email').after('<p>' + errorMessage + '<p>');
        } else {
            console.log(errorCode)
        }
    }).then(function () {
      console.log();
      var parentData = {
        first_name: $("#create_first_name").val(),
        last_name: $("#create_first_name").val(),
        uid: uid,
      }
      $.ajax({
        url: "/parent/create",
        type: "POST",
        data: parentData
      })
    });

  })
})
