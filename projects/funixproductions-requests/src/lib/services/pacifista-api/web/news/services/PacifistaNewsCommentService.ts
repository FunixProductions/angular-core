import {FunixprodHttpClient} from "../../../../core/components/requests/funixprod-http-client";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {environmentDev} from "../../../../../../environments/environment-dev";
import {PacifistaNewsService} from "./PacifistaNewsService";
import {catchError, Observable, throwError} from "rxjs";
import {PacifistaNewsCommentDTO} from "../dtos/comments/PacifistaNewsCommentDTO";
import {Paginated} from "../../../../core/dtos/paginated";
import {PacifistaNewsCommentLikeDTO} from "../dtos/comments/PacifistaNewsCommentLikeDTO";

export class PacifistaNewsCommentService extends FunixprodHttpClient {

    private readonly domain: string;
    private readonly path: string;

    constructor(protected http: HttpClient, production: boolean) {
        super();
        this.domain = production ? environment.pacifistaApiUrl : environmentDev.pacifistaApiUrl;
        this.path = 'web/news/comments';
    }

    public getCommentsByNewsId(newsId: string, page: number): Observable<Paginated<PacifistaNewsCommentDTO>> {
        return this.http.get<Paginated<PacifistaNewsCommentDTO>>(this.domain + this.path,
            {
                params: {
                    page: page,
                    newsId: newsId
                },
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public getRepliesByCommentId(commentId: string, page: number): Observable<Paginated<PacifistaNewsCommentDTO>> {
        return this.http.get<Paginated<PacifistaNewsCommentDTO>>(this.domain + this.path + '/replies',
            {
                params: {
                    page: page,
                    commentId: commentId
                },
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public getCommentsByUser(minecraftUsername: string, page: number): Observable<Paginated<PacifistaNewsCommentDTO>> {
        return this.http.get<Paginated<PacifistaNewsCommentDTO>>(this.domain + this.path + '/user',
            {
                params: {
                    page: page,
                    minecraftUsername: minecraftUsername
                },
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public createComment(request: PacifistaNewsCommentDTO, googleCaptchaCode: string): Observable<PacifistaNewsCommentDTO> {
        return this.http.post<PacifistaNewsCommentDTO>(this.domain + this.path, request, {headers: this.getHeaders(googleCaptchaCode)})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    public updateComment(commentId: string, content: string): Observable<PacifistaNewsCommentDTO> {
        return this.http.patch<PacifistaNewsCommentDTO>(this.domain + this.path + '/' + commentId, content, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    public deleteComment(commentId: string): Observable<any> {
        return this.http.delete(this.domain + this.path + '/' + commentId, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    public getLikesOnComment(commentId: string, page: number): Observable<Paginated<PacifistaNewsCommentLikeDTO>> {
        return this.http.get<Paginated<PacifistaNewsCommentLikeDTO>>(this.domain + this.path + '/likes',
            {
                params: {
                    page: page,
                    commentId: commentId
                },
                headers: PacifistaNewsService.getHeadersForGetRequest()
            }).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => this.buildErrorDto(error));
            })
        );
    }

    public likeComment(commentId: string): Observable<PacifistaNewsCommentLikeDTO> {
        return this.http.post<PacifistaNewsCommentLikeDTO>(this.domain + this.path + '/like/' + commentId, null, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

    public removeLikeFromComment(commentId: string): Observable<any> {
        return this.http.delete(this.domain + this.path + '/like/' + commentId, {headers: this.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error));
                })
            );
    }

}
