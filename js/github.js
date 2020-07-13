class Github {
    constructor() {
        this.client_id = '';
        this.client_Secret = '';
    }

    async getUser(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const profile = await response.json();
        return {
            userProfile : profile
        };
    }
}