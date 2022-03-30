export class UserDetail {
    fullName: string;
    numPublicRepos: number;
    numFollowers: number;
    numFollowing: number;

    constructor(fullName: string, numPublicRepos: number, numFollowers: number, numFollowing: number) {
        this.fullName = fullName;
        this.numPublicRepos = numPublicRepos;
        this.numFollowers = numFollowers;
        this.numFollowing = numFollowing;
    }

    public static fromResponse(response: any): UserDetail {
        return new UserDetail(response.name, response.public_repos, response.followers, response.following);
    }
}