class Github {

    constructor() {
        this.reposCount = 5;
        this.reposSort = 'created:desc';
        //INSERT YOUR TESTING TOKEN HERE OTHERWISE NO TOKEN WILL BE USED AND THUS YOU WILL HAVE around 60 requests per hour limit
        this.token = '';
        this.headers = typeof this.token === "string" && this.token.length > 10 ? { headers: { authorization: `token ${this.token}` } } : {};
    }

    async getUser(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}`, this.headers);
        const profile = await response.json();
        return {
            userProfile : profile
        };
    }

    async getUserRepos(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.reposCount}&sort=${this.reposSort}`, this.headers);
        const repos = await response.json();
        console.log('repos=', {
            userRepos : repos
        });
        return {
            userRepos : repos
        };
    }
}