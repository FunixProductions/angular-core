import {ApiDTO} from "../../../../../core/dtos/api-dto";

export class PacifistaNewsDTO extends ApiDTO {

  /**
   * Nom d'utilisateur Minecraft du rédacteur d'origine
   */
  originalWriter: string

  /**
   * Nom d'utilisateur Minecraft de la personne qui l'a modifié
   */
  updateWriter: string

  /**
   * Nom de l'article présent dans l'url
   */
  name: string

  /**
   * Nom de l'article sur la page
   */
  title: string

  /**
   * Sous titre de l'article
   */
  subtitle: string

  /**
   * Image id pour l'image en taille réelle
   */
  articleImageId: string

  /**
   * Image id pour l'image en taille résuite pour l'affichage par liste
   */
  articleImageIdLowRes: string

  /**
   * Le contenu HTML de l'article
   */
  bodyHtml: string

  /**
   * Le contenu MarkDown de l'article pour la modification
   */
  bodyMarkdown: string

  /**
   * Si la news est publiée ou pas
   */
  draft: boolean

  /**
   * Nombre de likes
   */
  likes: number

  /**
   * Nombre de commentaires
   */
  comments: number

  /**
   * Nombre de vues
   */
  views: number

  constructor(name: string, title: string, subtitle: string, bodyHtml: string, bodyMarkdown: string, draft: boolean) {
    super();
    this.name = name;
    this.title = title;
    this.subtitle = subtitle;
    this.bodyHtml = bodyHtml;
    this.bodyMarkdown = bodyMarkdown;
    this.draft = draft;

    this.originalWriter = '';
    this.updateWriter = '';
    this.articleImageId = '';
    this.articleImageIdLowRes = '';
    this.likes = 0;
    this.comments = 0;
    this.views = 0;
  }

}
