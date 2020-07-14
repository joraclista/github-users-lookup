class UI {
    constructor(profileContainer) {
        this.profileContainer = profileContainer;
        this.alerts = alerts;
    }


    formatText(text) {
        return typeof text != "undefined" && text != null ? text : '';
    }

    showProfile(userProfile) {
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
                                        <div class="row">
                                            <div class="col-md-2"><div class="badge badge-success">Public Repos: ${userProfile.public_repos}</div></div>
                                            <div class="col-md-2"><div class="badge badge-secondary">Following: ${userProfile.following}</div></div>
                                            <div class="col-md-2"><div class="badge badge-primary">Followers: ${userProfile.followers}</div></div>
                                        </div>                                     
                                        
                                        <div class="text-muted row">
                                            <div class="col-md-3">
                                                <div>Name:</div>
                                                <div>Bio:</div>
                                                <div>Member since:</div>
                                                <div>Email:</div>
                                                <div>Blog/Web-site:</div>
                                                <div>Location:</div>
                                            </div>
                                            <div class="col-md-9">
                                                <div>${this.formatText(userProfile.name)}</div>
                                                <div>${this.formatText(userProfile.bio)}</div>
                                                <div>${userProfile.created_at}</div>
                                                <div>${this.formatText(userProfile.email)}</div>
                                                <div>${this.formatText(userProfile.blog)}</div>
                                                <div> ${this.formatText(userProfile.location)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            `;
        this.profileContainer.innerHTML = template;

    }

    clearProfile() {
        this.profileContainer.innerHTML = '';
    }

    showAlert(message, _type) {
        let type = typeof _type == "undefined" || _type == null ? 'secondary' : _type;
        let alert = document.createElement('div');
        let btn = document.createElement('button');
        let txt = document.createElement('span');
        alert.classList = `alert alert-dismissible alert-${type}`;
        btn.classList = 'close';
        btn.innerHTML = '×';

        txt.innerHTML = message;
        alert.appendChild(btn);
        alert.appendChild(txt);
        this.alerts.appendChild(alert);

        const closeLater = setTimeout(() => this.clearAlert(alert), 3000);
        btn.addEventListener('click', () => {
            this.clearAlert(alert);
            //clearTimeout(closeLater);
        });

    }

    clearAlert(alert) {
        try {
            alerts.removeChild(alert);
        } catch (e) {
            console.error('clearAlert: Error while removing alert message: ', e);
        }

    }
}