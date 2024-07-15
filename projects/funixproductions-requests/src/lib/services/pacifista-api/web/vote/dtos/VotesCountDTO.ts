export class VotesCountDTO {
    username: string;
    votesCount: number;

    constructor(username: string, votesCount: number) {
        this.username = username;
        this.votesCount = votesCount;
    }
}