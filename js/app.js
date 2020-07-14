const github = new Github

const githubUserName = document.getElementById("githubUserName");
const userProfileContainer = document.getElementById("profile");
const userRepos = document.getElementById("repos");
const alerts = document.getElementById("alerts");
const ui = new UI(userProfileContainer, userRepos, alerts);

githubUserName.addEventListener("keyup", onUserKeyUp);

//TODO: add client secret to use github api

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

            });
        github.getUserRepos(username)
            .then(user => {
                if (typeof user.userRepos.message != "undefined" && user.userRepos.message.toLowerCase() === 'not found')  {
                    console.log("user repos : Repos Not Found");
                    ui.clearProfile();
                   // ui.showAlert("User Not Found", "danger");
                } else {
                    console.log("user repos :", user.userRepos);
                    ui.showRepos(user.userRepos);
                }

            })

    }
}