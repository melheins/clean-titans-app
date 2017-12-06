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
    // Watch for changes to logged in user and get uid
    var uid;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) uid = user.uid
    })

    var childId = window.location.pathname.split("/").pop();
    console.log(childId);
    //set up listeners


    $(document).on("click", ".alter", appendAndMove);

    //append parent id to links and change directory
    function appendAndMove() {
        event.preventDefault();
        var url = $(this).attr("href") + "/" + childId;
        window.location = url
    }

    //$(document).on("click", "#mission_accomplished", changeStatusMission);
    //$(document).on("click", "#reward_claim_btn", claimReward);

// doc ready closing
});
