class UI {
    constructor() {

    }


    formatText(text) {
        return typeof text != "undefined" && text != null ? text : '';
    }

    showProfile(div, userProfile) {
        const template = `
                            <div class="card card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="${userProfile.avatar_url}" 
                                             alt="avatar" 
                                             class="img-fluid mb-2">
                                        <a href="${userProfile.html_url}" 
                                           target="_blank" 
                                           class="btn btn-primary btn-block">View User Profile</a>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="badge badge-success">Public Repos: ${userProfile.public_repos}</div>
                                        <div class="badge badge-secondary">Following: ${userProfile.following}</div>
                                        <div class="badge badge-primary">Followers: ${userProfile.followers}</div>
                                        
                                        <div class="text-muted row">
                                            <div class="col-md-3">
                                                <div>Bio:</div>
                                                <div>Member since:</div>
                                                <div>Email:</div>
                                                <div>Location:</div>
                                            </div>
                                            <div class="col-md-9">
                                                <div>${this.formatText(userProfile.bio)}</div>
                                                <div>${userProfile.created_at}</div>
                                                <div>${this.formatText(userProfile.email)}</div>
                                                <div> ${this.formatText(userProfile.location)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            `;
        div.innerHTML = template;

    }
}