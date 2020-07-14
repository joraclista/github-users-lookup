const github = new Github;

const githubUserName = document.getElementById("githubUserName");
const userProfileContainer = document.getElementById("profile");
const userRepos = document.getElementById("repos");
const alerts = document.getElementById("alerts");
const ui = new UI(userProfileContainer, userRepos, alerts);

githubUserName.addEventListener("keyup", onUserKeyUp);

function responseMessageIsOk(message) {
    if (typeof message !== "undefined" && message.trim().length > 0)  {
        console.log(`checkHttpResponseMessage: ${message}`);
        ui.clearProfile();
        ui.showAlert(message, "danger");
        return false;
    }
    return true;
}


function getUserProfileInfo(username, callback) {
    github.getUser(username)
        .then(user => {
            if (responseMessageIsOk(user.userProfile.message)) {
                console.log("getUserProfileInfo: ", user);
                ui.showProfile(user.userProfile);
                if (typeof callback !== "undefined" && callback != null) {
                    callback();
                }
            }
        });
}


function getUserReposInfo(username, callback) {
    github.getUserRepos(username)
        .then(user => {
            if (responseMessageIsOk(user.userRepos.message)) {
                console.log("getUserReposInfo:", user.userRepos);
                ui.showRepos(user.userRepos);
                if (typeof callback !== "undefined" && callback != null) {
                    callback();
                }
            }
        });
}

function onUserKeyUp (e) {
    console.log(`onUserKey: e.target=${e.target}`);

    const username = e.target.value;

    if (username.trim() !== '') {
        getUserProfileInfo(username, () => getUserReposInfo(username));
    }
}