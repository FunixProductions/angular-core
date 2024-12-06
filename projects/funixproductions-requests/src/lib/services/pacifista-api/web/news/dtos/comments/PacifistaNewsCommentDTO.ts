import {PacifistaNewsUserDataDTO} from "../PacifistaNewsUserDataDTO";
import {PacifistaNewsDTO} from "../news/PacifistaNewsDTO";

export class PacifistaNewsCommentDTO extends PacifistaNewsUserDataDTO {

    /**
     * Commentaire parent
     */
    parent?: PacifistaNewsCommentDTO

    /**
     * Contenu du commentaire en texte plein, pas de HTML
     */
    content: string

    /**
     * Nombre de likes sur ce commentaire
     */
    likes: number

    /**
     * Nombre de réponses à ce commentaire
     */
    replies: number

    /**
     * Si l'utilisateur a liké ce commentaire (si authentifié)
     */
    liked: boolean

    constructor(news: PacifistaNewsDTO, content: string, parent?: PacifistaNewsCommentDTO) {
        super(news);
        this.content = content;
        this.parent = parent;

        this.likes = 0;
        this.replies = 0;
        this.liked = false;
    }

}