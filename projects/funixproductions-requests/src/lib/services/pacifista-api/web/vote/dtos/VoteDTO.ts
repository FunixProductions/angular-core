import {ApiDTO} from "../../../../core/dtos/api-dto";

export class VoteDTO extends ApiDTO {
    username: string;
    voteWebsite: string;
    voteValidationDate?: Date;
    nextVoteDate?: Date;

    constructor(username: string, voteWebsite: string) {
        super();
        this.username = username;
        this.voteWebsite = voteWebsite;
    }
}
