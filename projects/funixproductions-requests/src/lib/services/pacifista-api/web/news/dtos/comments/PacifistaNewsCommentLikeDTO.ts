import {PacifistaNewsUserDataDTO} from "../PacifistaNewsUserDataDTO";
import {PacifistaNewsDTO} from "../news/PacifistaNewsDTO";
import {PacifistaNewsCommentDTO} from "./PacifistaNewsCommentDTO";

export class PacifistaNewsCommentLikeDTO extends PacifistaNewsUserDataDTO {

    /**
     * Le commentaire de la news qui a été liké
     */
    comment: PacifistaNewsCommentDTO

    constructor(news: PacifistaNewsDTO, comment: PacifistaNewsCommentDTO) {
        super(news);
        this.comment = comment;
    }

}
