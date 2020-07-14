class Github {
    constructor() {
        this.client_id = '';
        this.client_Secret = '';
        this.reposCount = 5;
        this.reposSort = 'created:desc';
    }

    async getUser(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const profile = await response.json();
        return {
            userProfile : profile
        };
    }

    async getUserRepos(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`);
        const repos = await response.json();
        console.log('repos=', {
            userRepos : repos
        });
        return {
            userRepos : repos
        };
    }
}