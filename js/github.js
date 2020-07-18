export default class Github {


    constructor(settings) {
        this.reposCount = settings.reposCount;
        this.reposSort = settings.sort;
        this.token = settings.token;
        this.baseUrl = settings.baseUrl;
        this.headers = { headers: { authorization: `token ${this.token}` } };
    }

    async getUser(userName) {
        const response = await fetch(`${this.baseUrl}users/${userName}`, this.headers);
        const profile = await response.json();
        return {
            userProfile : profile
        };
    }

    async getUserRepos(userName) {
        const response = await fetch(`${this.baseUrl}users/${userName}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`, this.headers);
        const repos = await response.json();
        console.log('repos=', {
            userRepos : repos
        });
        return {
            userRepos : repos
        };
    }
}

