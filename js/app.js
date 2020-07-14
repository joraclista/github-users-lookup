const github = new Github

const githubUserName = document.getElementById("githubUserName");
const userProfileContainer = document.getElementById("profile");
const alerts = document.getElementById("alerts");
const ui = new UI(userProfileContainer, alerts);

githubUserName.addEventListener("keyup", onUserKeyUp);



function onUserKeyUp(e) {
    console.log(`onUserKey: e.target=${e.target}`);

    const username = e.target.value;

    if (username.trim() != '') {
        github.getUser(username)
            .then(user => {
                if (typeof user.userProfile.message != "undefined" && user.userProfile.message.toLowerCase() === 'not found')  {
                    console.log("user profile : User Not Found");
                    ui.clearProfile();
                    ui.showAlert("User Not Found", "danger");
                } else {
                    console.log("user profile :", user);
                    ui.showProfile(user.userProfile);
                }

            })

    }
}