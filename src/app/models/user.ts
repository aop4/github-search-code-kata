export class User {
    username: string;
    profileUrl: string;
    profileImageUrl: string;

    constructor(username: string, profileUrl: string, profileImageUrl: string) {
        this.username = username;
        this.profileUrl = profileUrl;
        this.profileImageUrl = profileImageUrl;
    }

    public static fromResponse(response: any): User {
        return new User(response.login, response.html_url, response.avatar_url);
    }
}