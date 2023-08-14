const user = {
    avatarUrl : '',
    name : '',
    bio : '',
    userName : '',
    numberFollowers : '',
    numberFollowing : '',
    repositories : '',
    events : '',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.numberFollowers = gitHubUser.followers;
        this.numberFollowing = gitHubUser.following;
    },
    setRepositories(repositories){
        this.repositories = repositories;
    },
    setEvents(events){
        this.events = events;
    }
}
export { user };
