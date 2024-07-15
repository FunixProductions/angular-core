export class VoteWebsiteDTO {
    enumName: string;
    displayName: string;
    urlVote: string;
    coolDownInMinutes: number;

    constructor(enumName: string, displayName: string, urlVote: string, coolDownInMinutes: number) {
        this.enumName = enumName;
        this.displayName = displayName;
        this.urlVote = urlVote;
        this.coolDownInMinutes = coolDownInMinutes;
    }
}
