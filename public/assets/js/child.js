$(document).ready(function () {

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
    $(document).on("click", "#mission_accomplished", changeStatusMission);
    $(document).on("click", "#reward_claim_btn", claimReward);


    function claimReward() {
        rewards.destroy({
            where: {
                reward_status: "C"
            }
        })
    };
    
    function changeStatusMission () {
        active_missions.update({
            where: {
                mission_status: "I"
            }
        }).on('success', function (status) {
            if (status) {
                active_missions.updateAttributes({
                    mission_status: "C"
                })
            }
        });

        accomplishMission();
    };

    function accomplishMission() {
        active_missions.destroy({
            where: {
                mission_status: "C"
            }
        });
    };

// doc ready closing
});