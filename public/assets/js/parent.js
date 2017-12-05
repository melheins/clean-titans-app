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

  var parentID = window.location.pathname.split("/").pop()
  var childID =
  console.log(parentID)
  //set up listeners
  $(document).on("click", "#create_child", createChild)
  //$(document).on("click", div, action)

  //function to create child
  function createChild() {
    event.preventDefault();
    //get values
    var password = $("#create_password").val().trim();
    var verify = $("#password_verify").val().trim();
    var first_name = $("#create_first_name").val().trim();
    var nickname = $("#create_nickname").val().trim()
    var email = first_name + "@cleantitans.com"
    //validate form \
    if (!email || !password || !first_name || !nickname ||password != verify) {
      console.log(email + " " + password + " " + verify + " " + first_name + " " + last_name);
      return}
    console.log("clicked");

    //create firebase account
    addUser(email, password, nickname, first_name, parentID);
    }
    //add user to firebase
    function addUser(email, password, nickname, last_name, parentID) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
          console.log(error)
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
        addChild({first_name, avatar, nickname, uid, parentID})
      })
    }
    //add child to db
    function addChild(childData) {
      $.post("/api/children", childData)
      .then(function (newChild) {
        var childID = newChild.id
        addMissions(childID, parentID)
      })
    }
    //add missions for childDat
    function addMissions(childID, parentID) {
      $.get("/api/children/missions")
      .then(function (missionList) {
        console.log(missionList)
      })
    }
})
