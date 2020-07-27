import * as format from './format.js';

export default class UI {
  constructor(profileContainer, userRepos, alerts) {
    this.profileContainer = profileContainer;
    this.userRepos = userRepos;
    this.alerts = alerts;
  }

  showProfile(userProfile) {
    this.profileContainer.innerHTML = `
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
                        <div class="col-md-3">
                            <div class="badge badge-success">Public Repos: ${userProfile.public_repos}</div>
                        </div>
                        <div class="col-md-3">
                            <div class="badge badge-secondary">Following: ${userProfile.following}</div>
                        </div>
                        <div class="col-md-3">
                            <div class="badge badge-primary">Followers: ${userProfile.followers}</div>
                        </div>
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
                            <div>${format.formatText(userProfile.name)}</div>
                            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${format.formatText(userProfile.bio)}</div>
                            <div>${format.formatDate(userProfile.created_at)}</div>
                            <div>${format.formatText(userProfile.email)}</div>
                            <div>${format.formatText(userProfile.blog)}</div>
                            <div> ${format.formatText(userProfile.location)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  }

  clearProfile() {
    this.profileContainer.innerHTML = '';
    this.alerts.innerHTML = '';
    this.userRepos.innerHTML = '';
  }

  showRepos(repos) {
    this.userRepos.innerHTML = repos.map((repo) => `<div class="card card-body text-muted">
                  <div class="row">
                      <div class="col-md-3">                                        
                          <a href="${repo.html_url}" 
                             target="_blank" 
                             class="btn btn-primary btn-block">${repo.name}</a>
                      </div>
                      <div class="col-md-3">                                        
                          <div>Description:</div>
                          <div>Language:</div>
                          <div>Created:</div>
                          <div>Updated:</div>
                      </div>
                      <div class="col-md-6">                                        
                          <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${format.formatText(repo.description)}</div>
                          <div>${format.formatText(repo.language)}</div>
                          <div>${format.formatDate(repo.created_at)}</div>
                          <div>${format.formatDate(repo.updated_at)}</div>
                      </div>
                   </div>                    
              </div>`)
        .join('');
  }

  showAlert(message, _type) {
    const type = _type == null ? 'secondary' : _type;
    const alert = document.createElement('div');
    const btn = document.createElement('button');
    const txt = document.createElement('span');
    alert.classList = `alert alert-dismissible alert-${type}`;
    btn.classList = 'close';
    btn.innerHTML = '×';

    txt.innerHTML = message;
    alert.appendChild(btn);
    alert.appendChild(txt);
    this.clearAlerts();
    this.alerts.appendChild(alert);

    const closeLater = setTimeout(() => this.clearAlerts(), 5000);
    btn.addEventListener('click', () => {
      this.clearAlerts();
      clearTimeout(closeLater);
    });
  }

  clearAlerts() {
    this.alerts.innerHTML = '';
  }
};
