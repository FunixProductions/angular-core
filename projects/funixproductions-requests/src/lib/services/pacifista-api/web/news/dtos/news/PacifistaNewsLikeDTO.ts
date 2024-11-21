import {PacifistaNewsUserDataDTO} from "../PacifistaNewsUserDataDTO";
import {PacifistaNewsDTO} from "./PacifistaNewsDTO";

export class PacifistaNewsLikeDTO extends PacifistaNewsUserDataDTO {
    constructor(news: PacifistaNewsDTO) {
        super(news);
    }
}
