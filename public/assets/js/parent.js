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

  var parentId = window.location.pathname.split("/").pop()
  var childId =
  console.log(parentId)
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
    if (!email || !password || !first_name || !nickname || password != verify) {
      console.log(email + " " + password + " " + verify + " " + first_name + " " + nickname);
      return}
    console.log("clicked");

    //create firebase account
    addUser(email, password, nickname, first_name, parentId);
    }
    //add user to firebase
    function addUser(email, password, nickname, first_name, parentId) {
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
        addChild({first_name, nickname, uid, parentId})
      })
    }
    //add child to db
    function addChild(childData) {
      console.log(childData);
      $.post("/api/children", childData)
      .then(function (newChild) {
        childId = newChild.id
        $.get("/api/children/missions")
        .then(function (missionTableData) {
          var missionList = missionTableData;
          addMissions(childId, parentId, missionList)
        })
      })
    }
    //add missions for childDat

    function addMissions(childId, parentId, missionList) {
      var newMissions = [];
      for(var i = 0; i > missionslist.length; i++) {
        var missionData = missionList[i];
        console.log(missionData);
      }
    }
})
