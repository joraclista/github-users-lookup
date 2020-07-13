const github = new Github

const githubUserName = document.getElementById("githubUserName");
const userProfileContainer = document.getElementById("profile");

githubUserName.addEventListener("keyup", onUserKeyUp);



function onUserKeyUp(e) {
    console.log(`onUserKey: e.target=${e.target}`);

    const username = e.target.value;

    if (username.trim() != '') {
        github.getUser(username)
            .then(user => {
                if (typeof user.userProfile.message != "undefined" && user.userProfile.message.toLowerCase() === 'not found')  {
                    console.log("user profile : User Not Found");
                    //TODO clear previous profile data
                    userProfileContainer.innerHTML = '';
                } else {
                    console.log("user profile :", user);
                    //TODO show profile
                    new UI().showProfile(userProfileContainer, user.userProfile);
                }

            })

    }
}